import React, { useRef ,Suspense} from "react";
import {Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import MercuryMap from "../assets/textures/8k_mercury.jpg";

import { TextureLoader } from "three";

export default function Mercury(props) {
  const [colorMap] = useLoader(
    TextureLoader,
    [MercuryMap]
  );

  const mercuryRef = useRef();
 

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    mercuryRef.current.rotation.y = elapsedTime / 6;
    
    
  });
  

  return (
    <>
    
  
      {<ambientLight intensity={1} /> }
      <pointLight color="#f6f3ea" position={[0, 5, 10]} intensity={1.2} />
      
      <mesh ref={mercuryRef} position={[12, 0, 3]}>
        <sphereGeometry args={[5, 32, 32]} />
      
        <meshStandardMaterial
          map={colorMap}
          
          metalness={0.4}/*tính kim loại*/
          roughness={0.7}/*tính thô ráp*/
        />
                
        
      </mesh>

      
    </>
  );
}
