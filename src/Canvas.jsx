

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import vert from "./shader/vertex.glsl"
import frag from "./shader/frag.glsl"

const Canvas = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        
        // Move Camera Above the Plane (Floor)
        camera.position.set(0, 8, 15);  // Move camera above
       

      let   renderer = new THREE.WebGLRenderer({ antialias: true, depthWrite: true });
      renderer.autoClearDepth = true;  // Ensure that depth is cleared correctly.
      renderer.setClearColor( 0xffffff, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Plane Mesh (Floor)
        const geometry = new THREE.PlaneGeometry(5, 5,50,50);  // Bigger size for better view
        let material2 = new THREE.MeshBasicMaterial({ color: "red", side: THREE.DoubleSide });
        let shadermat=new THREE.ShaderMaterial({
            vertexShader:vert,fragmentShader:frag,
            uniforms:{
                time:new THREE.Uniform(0)
            }


        })
        // Add Fog (Linear Fog)
scene.fog = new THREE.Fog(new THREE.Color("red"), 1, 100);  // color, near, far
camera.fov = 75;  // Set a reasonable FOV
camera.updateProjectionMatrix();

scene.fog = new THREE.Fog(0xaaaaaa, 1, 50);  // Lighter fog color
shadermat.transparent = true;


        const plane = new THREE.Mesh(geometry, shadermat);
plane.scale.set(50,50,50)
        // Rotate Plane to Act as a Floor
        plane.rotation.x = -Math.PI / 2; 

        scene.add(plane);
camera.lookAt(plane.position)
        // Orbit Controls (Allows Rotation)
     
     
        // Resize Handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        // Render Loop
        let clocl=new THREE.Clock()
        const animate = () => {
            let elp=clocl.getElapsedTime()
            shadermat.uniforms.time.value=elp;
            requestAnimationFrame(animate);
            // controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup function
        return () => {
            window.removeEventListener("resize", handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };

    }, []);

    return <div ref={mountRef} />;
};

export default Canvas;
