import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls,Stars  } from "@react-three/drei";
import * as THREE from "three";
import React, { Suspense , Component} from "react";
import planetData from "../components/solarsystem/planetData"
import { Sun } from "../components/sun";
import Earth from "./earth";

export default function Home(){
    return(
        <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <Suspense fallback={null}>
          
          < Sun/>
          {planetData.map((planet) => (
            <Planet planet={planet} key={planet.id} />
          ))}       
       
          <Lights/>
          
             {/* <Mercury/>      */}
          {/* <Venus/> */}
           {/* <Earth/>    */}
          {/* <Mars/>  */}
          {/* <Jupiter/>  */}
        </Suspense>
      </Canvas>
    );
    

    function Planet({
        planet: {
          // color,
          xRadius,
          zRadius,
          size,
          speed,
          offset,
          rotationSpeed,
          textureMap,
          id
        }
      }) {
        const planetRef = React.useRef();
        const texture = useLoader(THREE.TextureLoader, textureMap);
        useFrame(({ clock }) => {
          const t = clock.getElapsedTime() * speed + offset;
          const x = xRadius * Math.sin(t);
          const z = zRadius * Math.cos(t);
          planetRef.current.position.x = x;
          planetRef.current.position.z = z;
          planetRef.current.rotation.y += rotationSpeed;
        });
    
        function onEnter(e) {
          planetRef.current.scale.x = 1.5;
          planetRef.current.scale.y = 1.5;
          planetRef.current.scale.z = 1.5;
          
    
        }
    
        function onOut(e) {
          planetRef.current.scale.x = 1;
          planetRef.current.scale.y = 1;
          planetRef.current.scale.z = 1;
        }
        function onclick(e){
          switch(id){
            case 0:
              window.location.href = "/mercurypage";
              break
            case 1:
              window.location.href = "/venuspage";
              break
            case 2:
              window.location.href = "/earthpage";
              break
            case 3:
              window.location.href = "/marspage";
              break
            case 4:
              window.location.href = "/jupiterpage";
              break
          }
        }
        return (
          <>
            <mesh ref={planetRef}
            onClick={()=>{onclick()}}
            onPointerEnter={() => {onEnter()}}
            onPointerOut={() => {onOut()}}
            >
              <sphereGeometry args={[size, 32, 32]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <Ecliptic xRadius={xRadius} zRadius={zRadius} />
          </>
        );
      }
      
      function Lights() {
        return (
          <>
            <ambientLight />
            <pointLight position={[0, 0, 3]} />
          </>
        );
      }
      
      function Ecliptic({ xRadius = 1, zRadius = 1 }) {
        const points = [];
        for (let index = 0; index < 64; index++) {
          const angle = (index / 64) * 2 * Math.PI;
          const x = xRadius * Math.cos(angle);
          const z = zRadius * Math.sin(angle);
          points.push(new THREE.Vector3(x, 0, z));
        }
      
        points.push(points[0]);
      
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line geometry={lineGeometry}>
            <lineBasicMaterial attach="material" color="#4F4F4F" linewidth={3} />
          </line>
        );
      }
    
}
