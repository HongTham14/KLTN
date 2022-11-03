import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {  Stars } from "@react-three/drei";
import * as THREE from "three";



import EarthDayMap from "../assets/textures/8k_earth_daymap.jpg";
// import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg";
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export default function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
     
      <ambientLight intensity={1} /> 
      {/* <pointLight color="#f6f3ea" position={[0, 0, 3]} intensity={1.2} /> */}
      <Stars
        radius={300}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[7, 7, 3]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4} /*Độ mờ*/
          depthWrite={true}
          transparent={true} /*trong suốt*/
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[7, 7, 3]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}/*tính kim loại*/
          roughness={0.7}/*tính thô ráp*/
        />
       
      </mesh>
    </>
  );
}
