import { Box } from "@mui/material";
import React, { useEffect, useRef,useState } from "react";
import * as THREE from "three";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
const AudioComponent = () => {
  const soundRef = useRef(null);
  const rendererRef = useRef(null);
let  [on, seton] = useState(false)
  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create an AudioListener and add it to the camera
    const listener = new THREE.AudioListener();
    camera.add(listener);

    // Create a global audio source
    const sound = new THREE.Audio(listener);
    soundRef.current = sound;

    // Load the sound and set it as the Audio object's buffer
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load("/smo.mp3", function (buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      if (rendererRef.current) {
        document.body.removeChild(rendererRef.current.domElement);
      }
      sound.stop();
    };
  }, []);

  useEffect(() => {
    console.log(on,"kk")

    if (soundRef.current && on ) {
        soundRef.current.play();
      }else{

        soundRef.current.stop();

      }
  }, [on])
  

  const handleClick = () => {

seton(!on)
   
  };

  return (

   <div  className="hh"   sx={{paddingTop:"90vh"}}>
 <div   onClick={handleClick}>{!on?<VolumeOffIcon fontSize="large"/>:<VolumeUpIcon fontSize="large"/>}</div>
   </div>
  );
};

export default AudioComponent;
