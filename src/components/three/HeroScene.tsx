"use client";

import { useEffect, useRef, useState } from "react";

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let animationFrameId: number;
    let renderer: import("three").WebGLRenderer;
    let scene: import("three").Scene;
    let camera: import("three").PerspectiveCamera;

    const initThree = async () => {
      if (!containerRef.current) return;
      const THREE = await import("three");

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.z = 24;

      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
      } catch {
        return;
      }

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(renderer.domElement);
      }

      // Orbital Rings Group (Mirroring WebNote logo ellipse)
      const ringGroup = new THREE.Group();
      scene.add(ringGroup);

      // Lime glowing orbital ring
      const ringGeo = new THREE.TorusGeometry(8, 0.08, 16, 120);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xc5e017,
        transparent: true,
        opacity: 0.85,
      });
      const orbitalRing = new THREE.Mesh(ringGeo, ringMat);
      orbitalRing.rotation.x = Math.PI / 3;
      orbitalRing.rotation.y = Math.PI / 6;
      ringGroup.add(orbitalRing);

      // Second outer subtle ring
      const ringGeo2 = new THREE.TorusGeometry(10.5, 0.04, 16, 120);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.4,
      });
      const orbitalRing2 = new THREE.Mesh(ringGeo2, ringMat2);
      orbitalRing2.rotation.x = -Math.PI / 4;
      orbitalRing2.rotation.z = Math.PI / 5;
      ringGroup.add(orbitalRing2);

      // Core Geometric Icosahedron
      const icoGeo = new THREE.IcosahedronGeometry(4.2, 1);
      const icoWireMat = new THREE.MeshBasicMaterial({
        color: 0x1a237e,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const icoMesh = new THREE.Mesh(icoGeo, icoWireMat);
      ringGroup.add(icoMesh);

      // Dynamic Interactive Particles
      const particleCount = 220;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorLime = new THREE.Color(0xc5e017);
      const colorBlue = new THREE.Color(0x38bdf8);
      const colorNavy = new THREE.Color(0x818cf8);

      for (let i = 0; i < particleCount; i++) {
        const radius = 6 + Math.random() * 12;
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);

        const choice = Math.random();
        const c = choice > 0.6 ? colorLime : choice > 0.3 ? colorBlue : colorNavy;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.22,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
      });

      const particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);

      // Mouse reactivity
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const halfX = window.innerWidth / 2;
        const halfY = window.innerHeight / 2;
        targetX = (e.clientX - halfX) * 0.0008;
        targetY = (e.clientY - halfY) * 0.0008;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      const handleResize = () => {
        if (!containerRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      // Animation Loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        ringGroup.rotation.y += 0.003;
        ringGroup.rotation.x += 0.0015;
        ringGroup.rotation.y += mouseX * 0.5;
        ringGroup.rotation.x += mouseY * 0.5;

        icoMesh.rotation.y -= 0.002;
        icoMesh.rotation.z += 0.001;

        particleSystem.rotation.y -= 0.0008;
        particleSystem.rotation.x += 0.0005;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        renderer?.dispose();
      };
    };

    const cleanupPromise = initThree();

    return () => {
      cleanupPromise.then((cleanup) => cleanup && cleanup());
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[460px] lg:min-h-[620px] flex items-center justify-center pointer-events-none">
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      {/* Decorative center glow matching brand colors */}
      <div className="absolute w-72 h-72 rounded-full bg-[#c5e017]/10 blur-[100px] pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-[#1a237e]/25 blur-[120px] pointer-events-none" />
    </div>
  );
}
