"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { soundFX } from "@/utils/audio";

import { InventionMode } from "@/types/hero";
export type { InventionMode };

interface HeroThreeCanvasProps {
  activeMode?: InventionMode;
  onModeChange?: (mode: InventionMode) => void;
}

export default function HeroThreeCanvas({ activeMode = "ACOUSTIC" }: HeroThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [fps, setFps] = useState(60);
  const [isInteracting, setIsInteracting] = useState(false);

  const modeRef = useRef<InventionMode>(activeMode);
  modeRef.current = activeMode;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera & High-Performance WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 25);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0); // Transparent to blend seamlessly with light theme
    container.appendChild(renderer.domElement);

    // Root Group for the Architectural 3D Sculpture
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 2. Lighting Setup for Light Theme (Sculpted highlights & specular reflections)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x4f46e5, 1.8);
    keyLight.position.set(15, 20, 20);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x06b6d4, 1.4);
    fillLight.position.set(-15, -10, 15);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xa855f7, 2.0, 50);
    rimLight.position.set(0, 15, -10);
    scene.add(rimLight);

    // 3. Central Architectural Frosted Crystal (Icosahedron & Dodecahedron)
    const coreGeo = new THREE.IcosahedronGeometry(4.8, 1);
    const coreEdges = new THREE.EdgesGeometry(coreGeo);
    const coreLineMat = new THREE.LineBasicMaterial({
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.55,
      linewidth: 1.5,
    });
    const coreMesh = new THREE.LineSegments(coreEdges, coreLineMat);
    sculptureGroup.add(coreMesh);

    // Inner glowing geometric lattice
    const innerGeo = new THREE.OctahedronGeometry(2.8, 0);
    const innerEdges = new THREE.EdgesGeometry(innerGeo);
    const innerLineMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.75,
    });
    const innerMesh = new THREE.LineSegments(innerEdges, innerLineMat);
    sculptureGroup.add(innerMesh);

    // 4. Spline-like Precision Gyroscopic Gimbal Rings (3 concentric titanium loops)
    const ringGroup = new THREE.Group();
    sculptureGroup.add(ringGroup);

    const ringData = [
      { radius: 7.2, tube: 0.045, rx: Math.PI / 4, ry: 0, color: 0x2563eb },
      { radius: 8.4, tube: 0.04, rx: -Math.PI / 3, ry: Math.PI / 6, color: 0x7c3aed },
      { radius: 9.6, tube: 0.035, rx: Math.PI / 6, ry: -Math.PI / 4, color: 0x0891b2 },
    ];

    const rings: THREE.Mesh[] = [];

    ringData.forEach((d) => {
      const geo = new THREE.TorusGeometry(d.radius, d.tube, 16, 120);
      const mat = new THREE.MeshStandardMaterial({
        color: d.color,
        roughness: 0.3,
        metalness: 0.85,
        transparent: true,
        opacity: 0.65,
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.x = d.rx;
      ring.rotation.y = d.ry;
      ringGroup.add(ring);
      rings.push(ring);
    });

    // 5. Precision Coordinate Survey Nodes (1,200 architectural point nodes)
    const nodeCount = 1200;
    const nodePositions = new Float32Array(nodeCount * 3);
    const baseNodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);
    const nodePhases = new Float32Array(nodeCount);
    const nodeSpeeds = new Float32Array(nodeCount);

    const palette = [
      new THREE.Color("#2563EB"), // Crisp Royal Blue
      new THREE.Color("#7C3AED"), // Modern Violet
      new THREE.Color("#0284C7"), // Sky Cyan
      new THREE.Color("#059669"), // Precision Emerald
      new THREE.Color("#D97706"), // Warm Amber
    ];

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const r = 6.2 + (Math.random() - 0.5) * 2.8;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;

      baseNodePositions[i * 3] = x;
      baseNodePositions[i * 3 + 1] = y;
      baseNodePositions[i * 3 + 2] = z;

      nodePhases[i] = Math.random() * Math.PI * 2;
      nodeSpeeds[i] = 0.6 + Math.random() * 1.2;

      const color = palette[i % palette.length];
      nodeColors[i * 3] = color.r;
      nodeColors[i * 3 + 1] = color.g;
      nodeColors[i * 3 + 2] = color.b;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    nodeGeometry.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));

    // Custom Crisp Circular Dot Texture
    const dotCanvas = document.createElement("canvas");
    dotCanvas.width = 32;
    dotCanvas.height = 32;
    const dotCtx = dotCanvas.getContext("2d");
    if (dotCtx) {
      dotCtx.beginPath();
      dotCtx.arc(16, 16, 12, 0, Math.PI * 2);
      dotCtx.fillStyle = "#FFFFFF";
      dotCtx.fill();
    }
    const dotTexture = new THREE.CanvasTexture(dotCanvas);

    const nodeMaterial = new THREE.PointsMaterial({
      size: 0.32,
      vertexColors: true,
      map: dotTexture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    sculptureGroup.add(nodePoints);

    // 6. Interactive Physics & Orbit Mechanics
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      isDown: false,
      downX: 0,
      downY: 0,
      rotX: 0,
      rotY: 0,
      velX: 0,
      velY: 0,
      shockwave: 0,
    };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / height) * 2 - 1);
      mouse.targetX = normX;
      mouse.targetY = normY;

      if (mouse.isDown) {
        const deltaX = e.clientX - mouse.downX;
        const deltaY = e.clientY - mouse.downY;
        mouse.downX = e.clientX;
        mouse.downY = e.clientY;
        mouse.velX = deltaX * 0.005;
        mouse.velY = deltaY * 0.005;
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      mouse.isDown = true;
      mouse.downX = e.clientX;
      mouse.downY = e.clientY;
      mouse.shockwave = 1.0;
      setIsInteracting(true);
      soundFX.playPulse();
    };

    const handlePointerUp = () => {
      mouse.isDown = false;
      setIsInteracting(false);
    };

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mouseup", handlePointerUp);

    // 7. Animation Loop with GSAP-like Harmonic Interpolation
    const clock = new THREE.Clock();
    let animId: number;
    let frameCount = 0;
    let lastTime = performance.now();

    const animate = () => {
      const time = clock.getElapsedTime();
      const mode = modeRef.current;

      // Track FPS
      frameCount++;
      if (performance.now() - lastTime >= 500) {
        setFps(Math.round((frameCount * 1000) / (performance.now() - lastTime)));
        frameCount = 0;
        lastTime = performance.now();
      }

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Apply drag rotation with friction decay
      mouse.rotY += mouse.velX;
      mouse.rotX += mouse.velY;
      mouse.velX *= 0.94;
      mouse.velY *= 0.94;

      if (mouse.shockwave > 0.01) {
        mouse.shockwave *= 0.93;
      } else {
        mouse.shockwave = 0;
      }

      // Gyroscopic Ring Continuous Rotations
      rings[0].rotation.z = time * 0.12 + mouse.rotY * 0.3;
      rings[1].rotation.x = -time * 0.10 + mouse.rotX * 0.3;
      rings[2].rotation.y = time * 0.15;

      // Main Core Rotation
      sculptureGroup.rotation.y = time * 0.06 + mouse.rotY + mouse.x * 0.35;
      sculptureGroup.rotation.x = -mouse.y * 0.25 + mouse.rotX;
      innerMesh.rotation.y = -time * 0.2;
      coreMesh.rotation.z = time * 0.04;

      // Camera Parallax Depth
      camera.position.x = mouse.x * 1.4;
      camera.position.y = mouse.y * 1.4;
      camera.lookAt(0, 0, 0);

      // Node Oscillations based on Invention Mode
      const posAttr = nodeGeometry.attributes.position as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;

      for (let i = 0; i < nodeCount; i++) {
        const bx = baseNodePositions[i * 3];
        const by = baseNodePositions[i * 3 + 1];
        const bz = baseNodePositions[i * 3 + 2];
        const ph = nodePhases[i];
        const sp = nodeSpeeds[i];

        let wave = 0;
        if (mode === "ACOUSTIC") {
          // Streaming Voice Acoustic Wave
          wave = Math.sin(time * 5 + bx * 0.5) * 0.6;
        } else if (mode === "SPATIAL") {
          // Precise coordinate grid pulse
          wave = Math.sin(time * 3 + Math.floor(bx)) * 0.3;
        } else {
          // High-frequency quantum pulse
          wave = Math.sin(time * 8 + ph) * 0.5;
        }

        const shock = mouse.shockwave * Math.sin(time * 10 - i * 0.02) * 1.2;
        const scale = 1 + wave / 6.2 + shock;

        posArr[i * 3] = bx * scale;
        posArr[i * 3 + 1] = by * scale;
        posArr[i * 3 + 2] = bz * scale;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);

      coreGeo.dispose();
      coreEdges.dispose();
      coreLineMat.dispose();
      innerGeo.dispose();
      innerEdges.dispose();
      innerLineMat.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      dotTexture.dispose();
      rings.forEach((r) => {
        r.geometry.dispose();
        if (Array.isArray(r.material)) r.material.forEach((m) => m.dispose());
        else r.material.dispose();
      });
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-cursor-label={isInteracting ? "ORBITING" : "3D DRAG"}
      className="absolute inset-0 pointer-events-auto z-0 overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    >
      {/* Precision Light-Theme Telemetry HUD - Left Top */}
      <div className="absolute top-28 left-6 hidden lg:flex flex-col gap-1 p-3.5 rounded-2xl bg-white/85 backdrop-blur-xl border border-gray-200/80 text-[10px] font-mono text-neutral-600 pointer-events-none z-10 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-bold text-neutral-900 tracking-wider">3D SCULPTURE // WEBGL</span>
        </div>
        <div className="text-[10px] text-neutral-500 space-y-0.5 pt-0.5">
          <div>GYROSCOPE: 3 TITANIUM RINGS</div>
          <div>SURVEY NODES: 1,200 VECTORS</div>
          <div>FPS: {fps} // ZERO JITTER</div>
        </div>
      </div>

      {/* Interactive Orbit Hint - Bottom Center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-gray-200/90 text-[11px] font-mono text-neutral-700 pointer-events-none z-10 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        <span className="font-semibold uppercase tracking-wider">
          {isInteracting ? "ROTATING 3D INVENTIONS" : "CLICK & DRAG TO ROTATE SCULPTURE IN 360°"}
        </span>
      </div>
    </div>
  );
}
