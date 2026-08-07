import { useEffect, useRef } from "react";
import * as THREE from "three";

// A quiet field of drifting gold motes behind the Hero — the one spot on the
// site that gets real WebGL depth instead of a CSS/SVG approximation. Kept
// deliberately minimal (a single Points cloud, no lighting/shadows/postfx)
// and code-split via HeroParticles.lazy.tsx so no other page pays for it.
export function HeroParticles({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    // Building the scene (shaders, buffers, WebGL context) is synchronous
    // work that was landing in the same frame as the hero's entrance
    // animation, causing a brief stutter right as the page appears. Give
    // that first paint a clear run and set up the particles once the main
    // thread is actually idle.
    const ric =
      "requestIdleCallback" in window
        ? window.requestIdleCallback
        : (cb: IdleRequestCallback) => window.setTimeout(() => cb({} as IdleDeadline), 200);
    const cic =
      "cancelIdleCallback" in window
        ? window.cancelIdleCallback
        : (id: number) => window.clearTimeout(id);

    const idleId = ric(() => {
      if (!cancelled) cleanup = setup(mount);
    });

    return () => {
      cancelled = true;
      cic(idleId);
      cleanup?.();
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className={className} />;
}

function setup(mount: HTMLDivElement) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 12;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  mount.appendChild(renderer.domElement);

  const COUNT = 260;
  const positions = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: new THREE.Color("#b8912f"),
    size: 0.05,
    transparent: true,
    opacity: 0.45,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  function resize() {
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
  // scrolled into view — an off-screen WebGL scene still rendering is pure
  // waste.
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
    points.rotation.y = t * 0.00002;
    points.rotation.x = Math.sin(t * 0.00001) * 0.05;
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
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    mount.removeChild(renderer.domElement);
  };
}
