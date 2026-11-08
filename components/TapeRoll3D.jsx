'use client';

import { useEffect, useRef } from 'react';

export default function TapeRoll3D({ color = '#fcd805' }) {
  const mount = useRef(null);
  const matRef = useRef(null);

  useEffect(() => {
    let disposed = false;
    let renderer, scene, camera, mesh, raf;
    let cleanupResize = () => {};

    (async () => {
      const THREE = await import('three');
      if (disposed || !mount.current) return;

      const el = mount.current;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(35, el.clientWidth / el.clientHeight, 0.1, 100);
      camera.position.set(0, 1.2, 6);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setSize(el.clientWidth, el.clientHeight);
      el.appendChild(renderer.domElement);

      const group = new THREE.Group();
      const outer = new THREE.Mesh(
        new THREE.TorusGeometry(1.35, 0.55, 32, 96),
        new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.05 })
      );
      matRef.current = outer.material;
      const core = new THREE.Mesh(
        new THREE.CylinderGeometry(0.82, 0.82, 0.62, 48),
        new THREE.MeshStandardMaterial({ color: '#f6efdf', roughness: 0.9 })
      );
      core.rotation.x = Math.PI / 2;
      group.add(outer, core);
      group.rotation.x = 0.5;
      scene.add(group);
      mesh = group;

      scene.add(new THREE.AmbientLight(0xffffff, 0.9));
      const key = new THREE.DirectionalLight(0xffffff, 1.4);
      key.position.set(3, 4, 5);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xb6fe00, 0.7);
      rim.position.set(-4, -2, -3);
      scene.add(rim);

      const onResize = () => {
        if (!el.clientWidth) return;
        camera.aspect = el.clientWidth / el.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(el.clientWidth, el.clientHeight);
      };
      window.addEventListener('resize', onResize);
      cleanupResize = () => window.removeEventListener('resize', onResize);

      const loop = (t) => {
        if (disposed) return;
        mesh.rotation.z = t * 0.0006;
        mesh.rotation.y = Math.sin(t * 0.0004) * 0.35;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cleanupResize();
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (matRef.current) matRef.current.color.set(color);
  }, [color]);

  return <div ref={mount} style={{ width: '100%', height: '100%' }} />;
}
