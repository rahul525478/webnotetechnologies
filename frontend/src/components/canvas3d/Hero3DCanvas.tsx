"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface Hero3DCanvasProps {
  className?: string;
}

export function Hero3DCanvas({ className = "" }: Hero3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let isVisible = true;
    let animId: number;
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x6366f1, 2.0);
    dirLight2.position.set(-5, -3, 3);
    scene.add(dirLight2);

    const mainGeo = new THREE.IcosahedronGeometry(1.9, isMobile ? 0 : 1);
    const mainMat = new THREE.MeshPhysicalMaterial({
      color: 0x2563eb,
      emissive: 0x0284c7,
      emissiveIntensity: 0.15,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.7,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85,
      wireframe: false,
    });
    const mainMesh = new THREE.Mesh(mainGeo, mainMat);
    scene.add(mainMesh);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(mainGeo, wireMat);
    wireMesh.scale.setScalar(1.02);
    mainMesh.add(wireMesh);

    const ringGeo = new THREE.TorusGeometry(2.8, 0.04, 12, isMobile ? 50 : 80);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.3,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.75,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    const ring2Geo = new THREE.TorusGeometry(3.3, 0.025, 12, isMobile ? 50 : 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.45,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = -Math.PI / 4;
    ring2Mesh.rotation.y = Math.PI / 6;
    scene.add(ring2Mesh);

    const particleCount = isMobile ? 30 : 60;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 10;
      particlePos[i + 1] = (Math.random() - 0.5) * 8;
      particlePos[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: isMobile ? 0.06 : 0.08,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let mouseX = 0;
    let targetX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      targetX = x * 1.5;
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });

    const clock = new THREE.Clock();

    const renderFrame = () => {
      if (!isVisible) return;
      animId = requestAnimationFrame(renderFrame);

      const elapsed = clock.getElapsedTime();
      mouseX += (targetX - mouseX) * 0.05;

      const speedMultiplier = prefersReducedMotion ? 0.05 : 0.3;
      mainMesh.rotation.y = elapsed * speedMultiplier + mouseX;
      mainMesh.rotation.x = elapsed * (speedMultiplier * 0.6);

      ringMesh.rotation.z = elapsed * (speedMultiplier * 0.8);
      ring2Mesh.rotation.z = -elapsed * (speedMultiplier * 0.5);

      particles.rotation.y = elapsed * (speedMultiplier * 0.2);

      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const shouldRun = entry.isIntersecting && !document.hidden;
        if (shouldRun !== isVisible) {
          isVisible = shouldRun;
          if (isVisible) {
            clock.start();
            renderFrame();
          } else {
            cancelAnimationFrame(animId);
          }
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const onVisibilityChange = () => {
      const shouldRun = !document.hidden;
      if (shouldRun !== isVisible) {
        isVisible = shouldRun;
        if (isVisible) {
          clock.start();
          renderFrame();
        } else {
          cancelAnimationFrame(animId);
        }
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    renderFrame();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      mainGeo.dispose();
      mainMat.dispose();
      wireMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[300px] pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
