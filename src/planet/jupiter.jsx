import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {  Stars } from "@react-three/drei";
import * as THREE from "three";


import JupiterMap from "../assets/textures/8k_jupiter.jpg";

import { TextureLoader } from "three";

export default function Jupiter(props) {
  const [colorMap] = useLoader(
    TextureLoader,
    [JupiterMap]
  );

  const jupiterRef = useRef();
 

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    jupiterRef.current.rotation.y = elapsedTime / 6;
    
  });

  return (
    <>
      {<ambientLight intensity={1} /> }
      <pointLight color="#f6f3ea" position={[0, 0, 3]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
     
      <mesh ref={jupiterRef} position={[11, 5, 6]}>
        <sphereGeometry args={[9, 32, 32]} />
      
        <meshStandardMaterial
          map={colorMap}
          
          metalness={0.4}/*tính kim loại*/
          roughness={0.7}/*tính thô ráp*/
        />
        
      </mesh>
    </>
  );
}
