"use client"

import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"

// Raw 2D [x, z] curves from Vectr source
const zrRaw = [
  [[-53, -21], [-53, -20.3], [-53.09, -20.09], [-53.3, -20], [-55.45, -20], [-55.57, -19.98], [-55.66, -19.91], [-55.73, -19.81], [-55.75, -19.7], [-55.75, 3]],
  [[-53, -27.5], [-53, -26.3], [-53.09, -26.09], [-53.3, -26], [-55.7, -26], [-55.91, -25.91], [-56, -25.7], [-56, 3]],
  [[-59, -27.5], [-59, -26.3], [-58.91, -26.09], [-58.7, -26], [-56.55, -26], [-56.34, -25.91], [-56.25, -25.7], [-56.25, 3]],
  [[-59, -21.2], [-59, -19.3], [-58.91, -19.09], [-58.7, -19], [-56.8, -19], [-56.59, -18.91], [-56.5, -18.7], [-56.5, 3]],
]

const paRaw = [
  [-56.1, 3], [-55.5, 11], [-50, 20], [-40, 25], [-20, 25], [0, 25], [24, 25]
]

const maRaw = [
  [24, 25], [55.5, 25]
]

// Global cache for instant reloads
let cachedSceneGLTF: any = null
let cachedWorkersGLTF: any = null

function mapRange(val: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  const norm = Math.min(Math.max((val - inMin) / (inMax - inMin), 0), 1)
  return outMin + norm * (outMax - outMin)
}

export function Vectr3DScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isDisposed = false
    let animationFrameId: number

    // Three.js Scene with exact Vectr Ice-Blue atmosphere
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xd0e1eb)
    scene.fog = new THREE.Fog(0xd0e1eb, 40, 240)

    const width = window.innerWidth
    const height = window.innerHeight

    // Camera setup
    const camera = new THREE.PerspectiveCamera(16, width / height, 0.1, 1000)

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0xd0e1eb, 1)
    renderer.toneMapping = THREE.LinearToneMapping
    renderer.toneMappingExposure = 1.15

    const canvas = renderer.domElement
    canvas.style.position = "absolute"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.pointerEvents = "none"
    canvas.style.transition = "opacity 0.4s ease"
    canvas.style.opacity = "1"
    container.appendChild(canvas)

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5)
    mainLight.position.set(40, 90, 50)
    scene.add(mainLight)

    const fillLight = new THREE.DirectionalLight(0xd9ecf7, 1.0)
    fillLight.position.set(-30, 40, -20)
    scene.add(fillLight)

    // References
    const turbineRotors: THREE.Object3D[] = []
    const workerMixers: THREE.AnimationMixer[] = []

    // Mouse Parallax
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1
      const normY = -(e.clientY / window.innerHeight) * 2 + 1
      targetMouseX = normX * 0.05
      targetMouseY = normY * 0.03
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    // Scroll Progress
    let currentProgress = 0
    let targetProgress = 0

    const handleScroll = () => {
      const flowEl = document.querySelector(".flow") as HTMLElement
      const wrapperEl = flowEl?.querySelector(".flow__wrapper") as HTMLElement
      const stickyDist =
        flowEl && wrapperEl
          ? Math.max(flowEl.offsetHeight - wrapperEl.offsetHeight, 1)
          : window.innerHeight * 2.4
      const scrollY = window.scrollY
      targetProgress = Math.min(Math.max(scrollY / stickyDist, 0), 1.05)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    // Resize
    const handleResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    window.addEventListener("resize", handleResize, { passive: true })

    // ==============================================================
    // Vectr Spline Curves & Mathematical Flight Path
    // ==============================================================
    const zo = 0.15
    const wo = new THREE.Vector3(-50, zo, -35)
    const yo = new THREE.Vector3(-56.1, zo, 3)

    // Blue Line 0 (Pa)
    const paV3s = paRaw.map((p) => new THREE.Vector3(p[0], zo, p[1]))
    const blueCurve0 = new THREE.CatmullRomCurve3(paV3s)
    const blueSamplePts0 = blueCurve0.getPoints(80)

    // Blue Line 1 (Ma)
    const maV3s = maRaw.map((p) => new THREE.Vector3(p[0], zo, p[1]))
    const blueCurve1 = new THREE.CatmullRomCurve3(maV3s)

    // Camera Lookat Bezier Path from wo to yo
    const tangent0 = new THREE.Vector3()
    blueCurve0.getTangent(0, tangent0)
    const sVec = new THREE.Vector3().subVectors(yo, wo)
    const sLen = sVec.length()
    const cpA = new THREE.Vector3().copy(wo).addScaledVector(sVec, 1 / 3)
    const cpB = new THREE.Vector3().copy(yo).addScaledVector(tangent0, -sLen / 3)
    const cameraLookatPathCurve = new THREE.CubicBezierCurve3(wo, cpA, cpB, yo)

    // Red Neon Lines (zr)
    const redLinesGroup = new THREE.Group()
    scene.add(redLinesGroup)

    const redMaterial = new THREE.MeshStandardMaterial({
      color: 0xff4d67,
      emissive: 0xff2244,
      emissiveIntensity: 1.2,
      roughness: 0.2,
      metalness: 0.1,
    })

    const redCurves = zrRaw.map((pts) => {
      const v3s = pts.map((p) => new THREE.Vector3(p[0], zo, p[1]))
      return new THREE.CatmullRomCurve3(v3s)
    })

    const redMeshes: THREE.Mesh[] = []
    redCurves.forEach((curve) => {
      const samplePts = curve.getPoints(80)
      const initialCurve = new THREE.CatmullRomCurve3(samplePts.slice(0, 3))
      const geom = new THREE.TubeGeometry(initialCurve, 40, 0.075, 8, false)
      const mesh = new THREE.Mesh(geom, redMaterial)
      mesh.visible = false
      redLinesGroup.add(mesh)
      redMeshes.push(mesh)
    })

    // Blue Laser Tube Mesh
    const blueMaterial = new THREE.MeshStandardMaterial({
      color: 0x0e94fb,
      emissive: 0x0099ff,
      emissiveIntensity: 1.5,
      roughness: 0.1,
      metalness: 0.2,
    })

    const initialBlueSubCurve = new THREE.CatmullRomCurve3(blueSamplePts0.slice(0, 3))
    const blueGeom = new THREE.TubeGeometry(initialBlueSubCurve, 60, 0.12, 8, false)
    const blueMesh = new THREE.Mesh(blueGeom, blueMaterial)
    blueMesh.visible = false
    scene.add(blueMesh)

    // Cyan Ground Dot Grid
    const dotGeom = new THREE.CircleGeometry(0.12, 8)
    dotGeom.rotateX(-Math.PI / 2)
    const dotMaterial = new THREE.MeshBasicMaterial({
      color: 0x57cdff,
      transparent: true,
      opacity: 0,
    })

    const groundDotsGroup = new THREE.Group()
    const dotCenterX = -55.5
    const dotCenterZ = 3.0
    for (let x = -9; x <= 9; x += 0.75) {
      for (let z = -9; z <= 9; z += 0.75) {
        if (x * x + z * z < 70) {
          const dot = new THREE.Mesh(dotGeom, dotMaterial)
          dot.position.set(dotCenterX + x, 0.08, dotCenterZ + z)
          groundDotsGroup.add(dot)
        }
      }
    }
    scene.add(groundDotsGroup)

    // Smoke Plumes (Seamless alpha gradient)
    const createSmokeTexture = () => {
      const c = document.createElement("canvas")
      c.width = 128
      c.height = 256
      const ctx = c.getContext("2d")!
      const grad = ctx.createRadialGradient(64, 150, 8, 64, 150, 60)
      grad.addColorStop(0, "rgba(242, 248, 252, 0.75)")
      grad.addColorStop(0.4, "rgba(230, 240, 248, 0.45)")
      grad.addColorStop(0.8, "rgba(215, 230, 240, 0.15)")
      grad.addColorStop(1, "rgba(208, 225, 235, 0)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, 128, 256)
      return new THREE.CanvasTexture(c)
    }

    const smokeMaterial = new THREE.SpriteMaterial({
      map: createSmokeTexture(),
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
    })
    const smokeSprite1 = new THREE.Sprite(smokeMaterial)
    smokeSprite1.position.set(-16, 6.0, 29)
    smokeSprite1.scale.set(4, 7, 1)
    scene.add(smokeSprite1)

    const smokeSprite2 = new THREE.Sprite(smokeMaterial)
    smokeSprite2.position.set(-20, 6.0, 27)
    smokeSprite2.scale.set(3.5, 6, 1)
    scene.add(smokeSprite2)

    // ==============================================================
    // Model Loader with Draco
    // ==============================================================
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath("/draco/gltf/")

    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)

    const turbineBladeMaterial = new THREE.MeshStandardMaterial({
      color: 0xedf3f8,
      roughness: 0.35,
      metalness: 0.05,
    })

    const setupSceneModel = (gltf: any) => {
      scene.add(gltf.scene)

      gltf.scene.traverse((child: any) => {
        if (child.name && child.name.toLowerCase().includes("windturbineblade")) {
          turbineRotors.push(child)
          child.traverse((c: any) => {
            if (c.isMesh) c.material = turbineBladeMaterial
          })
        }

        if (child.isMesh && child.material) {
          if (child.name && child.name.toLowerCase().includes("floor")) {
            child.material.roughness = 0.2
            child.material.metalness = 0.02
          } else if (child.material.roughness !== undefined) {
            child.material.roughness = Math.min(child.material.roughness, 0.45)
          }
        }
      })
    }

    // Use optimized 810 KB model for instant loading
    if (cachedSceneGLTF) {
      setupSceneModel(cachedSceneGLTF)
    } else {
      gltfLoader.load(
        "/models/vectr_scene.glb",
        (gltf) => {
          if (isDisposed) return
          cachedSceneGLTF = gltf
          setupSceneModel(gltf)
        },
        undefined,
        (err) => console.error("Error loading vectr_scene.glb:", err)
      )
    }

    // Setup Workers
    const setupWorkers = (workersGltf: any) => {
      const workerConfigs = [
        { x: -2.3, y: 0, z: -1.2, rot: 0.6, anim: "working" },
        { x: 1.1, y: 0, z: 2.3, rot: -1.3, anim: "talk_1" },
        { x: 3.4, y: 0, z: -3.8, rot: 2.0, anim: "idle" },
        { x: -4.8, y: 0, z: 1.2, rot: 0.3, anim: "talk_2" },
      ]

      const workerWhiteMaterial = new THREE.MeshStandardMaterial({
        color: 0xf5f8fa,
        roughness: 0.4,
        metalness: 0.1,
      })

      workerConfigs.forEach((config, idx) => {
        const clone = workersGltf.scene.clone(true)
        clone.position.set(config.x, config.y, config.z)
        clone.rotation.y = config.rot
        clone.scale.set(0.48, 0.48, 0.48)

        clone.traverse((c: any) => {
          if (c.isMesh && c.material) c.material = workerWhiteMaterial
        })

        scene.add(clone)

        if (workersGltf.animations && workersGltf.animations.length > 0) {
          const workerMixer = new THREE.AnimationMixer(clone)
          const animClip =
            workersGltf.animations.find((a: any) => a.name === config.anim) ||
            workersGltf.animations[idx % workersGltf.animations.length]
          const action = workerMixer.clipAction(animClip)
          action.play()
          action.time = Math.random() * 2
          workerMixers.push(workerMixer)
        }
      })
    }

    if (cachedWorkersGLTF) {
      setupWorkers(cachedWorkersGLTF)
    } else {
      gltfLoader.load("/models/workers.glb", (gltf) => {
        if (isDisposed) return
        cachedWorkersGLTF = gltf
        setupWorkers(gltf)
      })
    }

    // Render loop
    let lastTime = performance.now()
    let prevRedRatio = -1
    let prevBlueRatio = -1

    const U = new THREE.Vector3()
    const kt = new THREE.Vector3()
    const Br = new THREE.Quaternion()
    const Ur = new THREE.Quaternion()
    const rightVec = new THREE.Vector3()
    const upVec = new THREE.Vector3()

    let entranceProgress = 0
    let entrancePlaying = true

    const animate = (currentTime: number) => {
      if (isDisposed) return
      animationFrameId = requestAnimationFrame(animate)

      const delta = Math.min((currentTime - lastTime) / 1000, 0.1)
      lastTime = currentTime

      // 1. Wind Turbine rotation
      const rotSpeed = 2.5 * delta
      for (let i = 0; i < turbineRotors.length; i++) {
        turbineRotors[i].rotation.y += rotSpeed
      }

      // 2. Worker animation
      for (let i = 0; i < workerMixers.length; i++) {
        workerMixers[i].update(delta)
      }

      // 3. Smoke animation
      const smokeOffset = (currentTime * 0.0008) % 1
      smokeSprite1.position.y = 5.8 + smokeOffset * 1.5
      smokeSprite2.position.y = 5.8 + ((smokeOffset + 0.5) % 1) * 1.5

      // 4. Smooth camera progress damping
      mouseX += (targetMouseX - mouseX) * 0.08
      mouseY += (targetMouseY - mouseY) * 0.08
      currentProgress += (targetProgress - currentProgress) * 0.12

      // ==========================================================
      // Vectr Exact Spline Trajectory & Mathematical Rig
      // ==========================================================
      const p = currentProgress

      if (entrancePlaying) {
        entranceProgress = Math.min(1, entranceProgress + delta / 1.4)
        if (entranceProgress >= 1) entrancePlaying = false
      }
      const d = 1 - Math.pow(1 - entranceProgress, 3)

      const n = mapRange(p, 0, 0.25, 0, 1)
      const s = mapRange(p, 0.25, 0.75, 0, 1)
      const l = mapRange(p, 0.7, 0.85, 0, 1)
      const a = mapRange(p, 0.75, 0.95, 0, 1)

      if (a > 0) {
        blueCurve1.getPoint(a, U)
        blueCurve1.getPoint(a, kt)
      } else if (s > 0) {
        blueCurve0.getPoint(s, U)
        blueCurve0.getPoint(s, kt)
      } else {
        cameraLookatPathCurve.getPoint(n, U)
        cameraLookatPathCurve.getPoint(n, kt)
      }

      camera.position.copy(U)
      camera.position.y = 66
      camera.position.y += 80 * (1 - d)
      camera.lookAt(kt)
      Br.copy(camera.quaternion)

      camera.position.x += -30 * mapRange(l, 0, 0.35, 1, 0)
      camera.position.x += 3.5 * mapRange(a, 0.8, 1, 0, 1)
      camera.position.z += 50 * mapRange(l, 0.25, 0.5, 1, 0)

      camera.lookAt(U)
      Ur.copy(camera.quaternion).slerp(Br, 1 - mapRange(l, 0.5, 1, 1, 0))
      camera.quaternion.copy(Ur)

      const m = mapRange(p, 0.9, 1.25, 0, 1)
      if (m > 0) camera.translateZ(m * 45)

      // Mouse Parallax
      rightVec.setFromMatrixColumn(camera.matrixWorld, 0)
      upVec.setFromMatrixColumn(camera.matrixWorld, 1)
      camera.position.addScaledVector(rightVec, mouseX * 0.6)
      camera.position.addScaledVector(upVec, mouseY * 0.4)

      // 5. Dynamic Red Neon Lines Draw
      const redRatio = Math.min(1, Math.max(0, p / 0.18))
      if (redRatio > 0.01) {
        if (Math.abs(redRatio - prevRedRatio) > 0.015) {
          prevRedRatio = redRatio
          redCurves.forEach((curve, idx) => {
            const pts = curve.getPoints(80)
            const count = Math.max(2, Math.floor(pts.length * redRatio))
            const subCurve = new THREE.CatmullRomCurve3(pts.slice(0, count))
            redMeshes[idx].geometry.dispose()
            redMeshes[idx].geometry = new THREE.TubeGeometry(subCurve, 40, 0.08, 8, false)
            redMeshes[idx].visible = true
          })
        }
      } else {
        redMeshes.forEach((mesh) => (mesh.visible = false))
      }

      // 6. Dynamic Blue Laser Line Draw (from 0.17 to 0.74)
      const blueRatio = Math.min(1, Math.max(0, (p - 0.17) / 0.57))
      if (blueRatio > 0.01) {
        if (Math.abs(blueRatio - prevBlueRatio) > 0.015) {
          prevBlueRatio = blueRatio
          const count = Math.max(2, Math.floor(blueSamplePts0.length * blueRatio))
          const subCurve = new THREE.CatmullRomCurve3(blueSamplePts0.slice(0, count))
          blueMesh.geometry.dispose()
          blueMesh.geometry = new THREE.TubeGeometry(subCurve, 60, 0.12, 8, false)
          blueMesh.visible = true
        }
      } else {
        blueMesh.visible = false
      }

      // 7. Ground Dot Grid Opacity
      const gridOpacity = Math.min(0.65, Math.max(0, (p - 0.04) * 5))
      dotMaterial.opacity = gridOpacity

      renderer.render(scene, camera)
    }

    animationFrameId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      isDisposed = true
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)

      if (canvas && container.contains(canvas)) {
        container.removeChild(canvas)
      }
      dracoLoader.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      id="app"
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  )
}
