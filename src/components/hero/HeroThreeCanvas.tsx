"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { soundFX } from "@/utils/audio";

export default function HeroThreeCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0); // Pure transparent
    container.appendChild(renderer.domElement);

    // Group holding the entire neural core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 2. Color Palette for Particles (Google Labs & DeepMind palette)
    const palette = [
      new THREE.Color("#4285F4"), // Google Blue
      new THREE.Color("#7C3AED"), // Violet
      new THREE.Color("#06B6D4"), // Soft Cyan
      new THREE.Color("#FBBC05"), // Warm Gold
      new THREE.Color("#EC4899"), // Rose
      new THREE.Color("#10B981"), // Emerald
    ];

    // 3. Neural Particle Cloud (1,400 particles)
    const particleCount = 1400;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const basePositions = new Float32Array(particleCount * 3);
    const phases = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    const radius = 6.8;

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const r = radius + (Math.random() - 0.5) * 1.8;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.5 + Math.random() * 1.2;

      // Assign palette color
      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom circle texture for soft round particles
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.4, "rgba(255,255,255,0.8)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.38,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    coreGroup.add(particles);

    // 4. Outer Holographic Wireframe Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(7.6, 2);
    const wireframe = new THREE.WireframeGeometry(icoGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color("#4F46E5"),
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });
    const icosahedronLines = new THREE.LineSegments(wireframe, lineMaterial);
    coreGroup.add(icosahedronLines);

    // 5. Inner Core Glow Orb (subtle inner sphere)
    const innerGeometry = new THREE.SphereGeometry(3.2, 24, 24);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#6366F1"),
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    coreGroup.add(innerMesh);

    // 6. Interactive Mouse & Inertia Tracking
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      isDown: false,
      clickRipple: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / width) * 2 - 1;
      mouse.targetY = -(clientY / height) * 2 + 1;
    };

    const handleMouseDown = () => {
      mouse.isDown = true;
      mouse.clickRipple = 1.0;
      soundFX.playPulse();
      setIsInteracting(true);
    };

    const handleMouseUp = () => {
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
    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // 7. Animation Loop with Sine Wave Undulation and Shockwave Physics
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Group rotation
      coreGroup.rotation.y = time * 0.12 + mouse.x * 0.45;
      coreGroup.rotation.x = -mouse.y * 0.35 + Math.sin(time * 0.2) * 0.08;
      icosahedronLines.rotation.y = -time * 0.08;
      icosahedronLines.rotation.z = time * 0.05;
      innerMesh.rotation.y = time * 0.2;

      // Camera parallax
      camera.position.x = mouse.x * 1.5;
      camera.position.y = mouse.y * 1.5;
      camera.lookAt(0, 0, 0);

      // Particle wave undulation
      const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      // Decay click ripple
      if (mouse.clickRipple > 0.01) {
        mouse.clickRipple *= 0.94;
      } else {
        mouse.clickRipple = 0;
      }

      for (let i = 0; i < particleCount; i++) {
        const bx = basePositions[i * 3];
        const by = basePositions[i * 3 + 1];
        const bz = basePositions[i * 3 + 2];
        const phase = phases[i];
        const speed = speeds[i];

        // Harmonic breath
        const wave = Math.sin(time * speed + phase) * 0.25;
        const ripple = mouse.clickRipple * Math.sin(time * 10 - i * 0.05) * 1.4;
        const expansion = 1 + wave / radius + ripple;

        posArray[i * 3] = bx * expansion;
        posArray[i * 3 + 1] = by * expansion;
        posArray[i * 3 + 2] = bz * expansion;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      // Clean up Three.js resources
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      icoGeometry.dispose();
      wireframe.dispose();
      lineMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-cursor-label="3D ORBIT"
      className="absolute inset-0 pointer-events-auto z-0 overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing"
    >
      {/* Interactive Hint Pill in the corner */}
      <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-gray-200/80 shadow-2xs text-[11px] font-mono text-neutral-600 pointer-events-none z-10 transition-opacity">
        <span className={`w-2 h-2 rounded-full ${isInteracting ? "bg-emerald-500 animate-ping" : "bg-blue-600 animate-pulse"}`} />
        <span>THREE.JS 3D NEURAL CORE &bull; CLICK TO PULSE</span>
      </div>

      {/* Subtle overlay gradient to preserve high text contrast in center */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#f8f9fa] pointer-events-none z-1" />
    </div>
  );
}
