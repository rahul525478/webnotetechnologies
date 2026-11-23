"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface Technicals3DCanvasProps {
  className?: string;
}

export function Technicals3DCanvas({ className = "" }: Technicals3DCanvasProps) {
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
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const light1 = new THREE.DirectionalLight(0x0284c7, 2);
    light1.position.set(3, 4, 3);
    scene.add(light1);

    const group = new THREE.Group();
    scene.add(group);

    const nodeCount = isMobile ? 8 : 14;
    const nodeGeo = new THREE.OctahedronGeometry(0.28, 0);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x0284c7,
      emissiveIntensity: 0.25,
      metalness: 0.5,
      roughness: 0.2,
    });

    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 2.5
      );
      positions.push(pos);
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.position.copy(pos);
      group.add(mesh);
    }

    const linePoints: THREE.Vector3[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < 2.2) {
          linePoints.push(positions[i], positions[j]);
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    let mouseX = 0;
    let targetX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      targetX = x * 1.2;
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });

    const clock = new THREE.Clock();

    const renderFrame = () => {
      if (!isVisible) return;
      animId = requestAnimationFrame(renderFrame);

      const elapsed = clock.getElapsedTime();
      mouseX += (targetX - mouseX) * 0.05;

      const speedMultiplier = prefersReducedMotion ? 0.04 : 0.2;
      group.rotation.y = elapsed * speedMultiplier + mouseX;
      group.rotation.x = Math.sin(elapsed * 0.15) * 0.1;

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
      nodeGeo.dispose();
      nodeMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
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
