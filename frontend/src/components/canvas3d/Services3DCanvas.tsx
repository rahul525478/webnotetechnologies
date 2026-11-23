"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface Services3DCanvasProps {
  className?: string;
  variant?: "web" | "mobile" | "cloud" | "general";
}

export function Services3DCanvas({ className = "", variant = "general" }: Services3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let isVisible = true;
    let animId: number;
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x0284c7, 3, 20);
    pointLight.position.set(4, 4, 4);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x22c55e, 2, 20);
    pointLight2.position.set(-4, -3, 3);
    scene.add(pointLight2);

    const group = new THREE.Group();
    scene.add(group);

    const boxGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const boxMat = new THREE.MeshPhysicalMaterial({
      color: 0x3b82f6,
      roughness: 0.2,
      transmission: 0.6,
      transparent: true,
      opacity: 0.8,
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    const count = isMobile ? 3 : 5;
    const meshes: THREE.Mesh[] = [];

    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(boxGeo, boxMat);
      const wire = new THREE.Mesh(boxGeo, wireMat);
      wire.scale.setScalar(1.02);
      mesh.add(wire);

      const angle = (i / count) * Math.PI * 2;
      const radius = 1.6;
      mesh.position.set(
        Math.cos(angle) * radius,
        (i - (count - 1) / 2) * 0.5,
        Math.sin(angle) * radius
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      group.add(mesh);
      meshes.push(mesh);
    }

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

      const speedMultiplier = prefersReducedMotion ? 0.05 : 0.25;
      group.rotation.y = elapsed * speedMultiplier + mouseX;

      meshes.forEach((mesh, idx) => {
        mesh.rotation.x = elapsed * (prefersReducedMotion ? 0.05 : 0.3) + idx;
        mesh.rotation.y = elapsed * (prefersReducedMotion ? 0.05 : 0.2) + idx;
        mesh.position.y += Math.sin(elapsed * 1.5 + idx) * 0.003;
      });

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
      boxGeo.dispose();
      boxMat.dispose();
      wireMat.dispose();
    };
  }, [variant]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[300px] pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
