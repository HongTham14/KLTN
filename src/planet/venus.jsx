import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

import VenusMap from "../assets/textures/8k_venus_surface.jpg";

import VenusCloudsMap from "../assets/textures/4k_venus_atmosphere.jpg";
import { TextureLoader } from "three";

export default function Venus(props) {
  const [colorMap,  cloudsMap] = useLoader(
    TextureLoader,
    [VenusMap , VenusCloudsMap]
  );

  const venusRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    venusRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[0, 0, 5]} intensity={1.2} />
     
      <mesh ref={cloudsRef} position={[-14, 2.5, 3]}>
        <sphereGeometry args={[9, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.2} /*Độ mờ*/
          depthWrite={true}
          transparent={true} /*trong suốt*/
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={venusRef} position={[-14, 2.5, 3]}>
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
