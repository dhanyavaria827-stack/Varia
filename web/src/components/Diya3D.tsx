import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";

// A small stylised diya (oil lamp) built entirely from primitives — no
// external model file. Spins gently on its own, and a scroll motion value
// (0..1, driven by the section it sits in) adds extra rotation and lifts the
// flame's glow, so scrolling visibly "turns" the lamp rather than just
// having it spin in place.
export function Diya3D({
  scrollProgress,
  className = "",
}: {
  scrollProgress: MotionValue<number>;
  className?: string;
}) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
    camera.position.set(0, 1.1, 5.2);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const rig = new THREE.Group();
    scene.add(rig);

    // Bowl: a shallow lathed dish, brass-toned
    const profile = [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.9, 0.08),
      new THREE.Vector2(1.0, 0.22),
      new THREE.Vector2(0.75, 0.34),
      new THREE.Vector2(0.55, 0.3),
      new THREE.Vector2(0.5, 0.16),
    ];
    const bowlGeo = new THREE.LatheGeometry(profile, 48);
    const bowlMat = new THREE.MeshStandardMaterial({
      color: "#b8912f",
      metalness: 0.7,
      roughness: 0.32,
      emissive: "#3a2a08",
      emissiveIntensity: 0.15,
    });
    const bowl = new THREE.Mesh(bowlGeo, bowlMat);
    rig.add(bowl);

    // A little pooled oil, warmer/darker gold
    const poolGeo = new THREE.CircleGeometry(0.62, 40);
    const poolMat = new THREE.MeshStandardMaterial({
      color: "#7a4f14",
      metalness: 0.2,
      roughness: 0.15,
    });
    const pool = new THREE.Mesh(poolGeo, poolMat);
    pool.rotation.x = -Math.PI / 2;
    pool.position.y = 0.24;
    rig.add(pool);

    // Flame: a soft elongated shape, emissive, plus a matching point light
    const flameGeo = new THREE.ConeGeometry(0.14, 0.42, 16);
    const flameMat = new THREE.MeshStandardMaterial({
      color: "#ffb347",
      emissive: "#ff8a1f",
      emissiveIntensity: 1.6,
      roughness: 0.4,
    });
    const flame = new THREE.Mesh(flameGeo, flameMat);
    flame.position.set(0, 0.5, 0);
    rig.add(flame);

    const flameLight = new THREE.PointLight("#ffb347", 2.2, 6, 2);
    flameLight.position.set(0, 0.55, 0);
    rig.add(flameLight);

    const ambient = new THREE.AmbientLight("#fdf1e0", 0.55);
    scene.add(ambient);
    const key = new THREE.DirectionalLight("#fff4dd", 0.8);
    key.position.set(2, 3, 4);
    scene.add(key);

    function resize() {
      if (!mount) return;
      const { clientWidth: w, clientHeight: h } = mount;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    let raf = 0;
    // Only render while both the tab is focused AND this canvas is actually
    // scrolled into view — two Three.js scenes both rendering off-screen at
    // once (this one plus the hero particles higher up the page) is waste.
    let tabVisible = !document.hidden;
    let inView = false;
    function maybeStart() {
      if (tabVisible && inView && !reduceMotion && !raf) raf = requestAnimationFrame(tick);
    }
    const onVisibility = () => {
      tabVisible = !document.hidden;
      if (tabVisible) maybeStart();
    };
    document.addEventListener("visibilitychange", onVisibility);
    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) maybeStart();
    });
    io.observe(mount);

    function tick(t: number) {
      if (!tabVisible || !inView) {
        raf = 0;
        return;
      }
      const drift = t * 0.00015;
      const scroll = scrollProgress.get();
      rig.rotation.y = drift + scroll * Math.PI * 1.4;
      rig.rotation.x = Math.sin(drift * 1.3) * 0.05;

      const flicker = 1 + Math.sin(t * 0.012) * 0.08 + Math.sin(t * 0.031) * 0.05;
      flame.scale.set(flicker, flicker * (1 + scroll * 0.35), flicker);
      flameLight.intensity = 2.2 * flicker * (0.85 + scroll * 0.5);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    }

    if (reduceMotion) {
      renderer.render(scene, camera);
    }

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
      ro.disconnect();
      bowlGeo.dispose();
      bowlMat.dispose();
      poolGeo.dispose();
      poolMat.dispose();
      flameGeo.dispose();
      flameMat.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [scrollProgress]);

  return <div ref={mountRef} aria-hidden="true" className={className} />;
}
