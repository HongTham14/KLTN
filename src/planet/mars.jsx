import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {  Stars } from "@react-three/drei";
import * as THREE from "three";


import MarsMap from "../assets/textures/8k_mars.jpg";

import { TextureLoader } from "three";

export default function Mars(props) {
  const [colorMap] = useLoader(
    TextureLoader,
    [MarsMap]
  );

  const marsRef = useRef();
 

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    marsRef.current.rotation.y = elapsedTime / 6;
    
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
     
      <mesh ref={marsRef} position={[-6, 5, 3]}>
        <sphereGeometry args={[6, 32, 32]} />
      
        <meshStandardMaterial
          map={colorMap}
          
          metalness={0.4}/*tính kim loại*/
          roughness={0.7}/*tính thô ráp*/
        />
        
      </mesh>
    </>
  );
}
