import { useEffect, useRef } from "react";
import * as THREE from "three";
import { BackgroundAnimationProps } from "../../types/animation";

function Animation({ theme }: BackgroundAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });

    if (theme === "Light") {
      renderer.setClearColor(new THREE.Color("#ffffff"));
    } else {
      renderer.setClearColor(new THREE.Color("#000011"));
    }

    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const particleCount = 10000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    // Initialisation positions, couleurs, vitesses
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      positions.set([x, y, z], i * 3);

      if (theme === "Light") {
        if (i % 3 === 0) {
          colors.set([0.1, 0.1, 0.1], i * 3);
        } else {
          colors.set([1, 0, 0], i * 3);
        }
      } else {
        colors.set([1, 1, 1], i * 3);
      }

      velocities.set(
        [
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
        ],
        i * 3
      );
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const circleTexture = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/sprites/disc.png"
    );
    circleTexture.flipY = false;

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: THREE.NormalBlending,
      map: circleTexture,
      alphaTest: 0.4,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      const boundary = 50;

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;

        // Mise à jour des positions
        positions[ix] += velocities[ix];
        positions[ix + 1] += velocities[ix + 1];
        positions[ix + 2] += velocities[ix + 2];

        // Réapparition de l’autre côté si on dépasse le cube
        for (let j = 0; j < 3; j++) {
          if (positions[ix + j] > boundary) {
            positions[ix + j] = -boundary;
          } else if (positions[ix + j] < -boundary) {
            positions[ix + j] = boundary;
          }
        }
        // Couleurs oscillantes
        if (theme === "Light") {
          const colorFactor = (Math.sin(time * 2 + i) + 1) / 2;
          if (i % 3 === 0) {
            colors[ix] = 0.1;
            colors[ix + 1] = 0.1;
            colors[ix + 2] = 0.1;
          } else {
            colors[ix] = 1;
            colors[ix + 1] = colorFactor * 0.5;
            colors[ix + 2] = colorFactor * 0.5;
          }
        } else {
          // Oscille entre blanc et rouge clair
          const colorFactor = (Math.sin(time * 2 + i) + 1) / 2;
          colors[ix] = 1;
          colors[ix + 1] = 1 - colorFactor * 0.8;
          colors[ix + 2] = 1 - colorFactor * 0.8;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;

      particles.rotation.y += delta * 0.01;
      particles.rotation.x += delta * 0.005;

      renderer.render(scene, camera);
    }

    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);

      geometry.dispose();
      material.dispose();
      renderer.dispose();
      scene.clear();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        display: "block",
      }}
    />
  );
}

export default Animation;
