"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface GlobalGlobe3DCanvasProps {
  className?: string;
}

export function GlobalGlobe3DCanvas({ className = "" }: GlobalGlobe3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let isVisible = true;
    let animId: number;
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x0284c7, 2.5);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const sphereSegments = isMobile ? 24 : 36;
    const sphereGeo = new THREE.SphereGeometry(1.8, sphereSegments, sphereSegments);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0xf0f9ff,
      roughness: 0.1,
      transmission: 0.85,
      transparent: true,
      opacity: 0.65,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphere);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireSphere = new THREE.Mesh(sphereGeo, wireMat);
    wireSphere.scale.setScalar(1.002);
    globeGroup.add(wireSphere);

    const locations = [
      { lat: 22.5726, lon: 88.3639, name: "Kolkata, IN" },
      { lat: 37.7749, lon: -122.4194, name: "SF, USA" },
      { lat: 40.7128, lon: -74.006, name: "NY, USA" },
      { lat: 51.5074, lon: -0.1278, name: "London, UK" },
      { lat: 1.3521, lon: 103.8198, name: "Singapore" },
      { lat: 30.0444, lon: 31.2357, name: "Cairo" },
      { lat: -33.8688, lon: 151.2093, name: "Sydney" },
    ];

    const pointGeo = new THREE.SphereGeometry(0.06, 10, 10);
    const pointMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.8,
    });

    const arcVectors: THREE.Vector3[] = [];
    const disposables: { dispose: () => void }[] = [
      sphereGeo,
      sphereMat,
      wireMat,
      pointGeo,
      pointMat,
    ];

    locations.forEach((loc) => {
      const phi = (90 - loc.lat) * (Math.PI / 180);
      const theta = (loc.lon + 180) * (Math.PI / 180);
      const r = 1.83;

      const x = -(r * Math.sin(phi) * Math.cos(theta));
      const z = r * Math.sin(phi) * Math.sin(theta);
      const y = r * Math.cos(phi);

      const pMesh = new THREE.Mesh(pointGeo, pointMat);
      pMesh.position.set(x, y, z);
      globeGroup.add(pMesh);

      arcVectors.push(new THREE.Vector3(x, y, z));
    });

    for (let i = 0; i < arcVectors.length - 1; i++) {
      const p1 = arcVectors[i];
      const p2 = arcVectors[i + 1];
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      mid.multiplyScalar(1.25);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const curvePoints = curve.getPoints(isMobile ? 12 : 24);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const curveMat = new THREE.LineBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.5,
      });
      const curveLine = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(curveLine);
      disposables.push(curveGeo, curveMat);
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
      globeGroup.rotation.y = elapsed * speedMultiplier + mouseX;
      globeGroup.rotation.x = 0.2 + Math.sin(elapsed * 0.2) * 0.05;

      renderer.render(scene, camera);
    };

    // IntersectionObserver to pause rendering when offscreen
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
      if (prefersReducedMotion && !isVisible) {
        renderer.render(scene, camera);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Initial render
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
      disposables.forEach((d) => d.dispose());
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
