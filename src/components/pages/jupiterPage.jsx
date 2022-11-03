import styled from "styled-components";
import "./jupiterPage.css";
import Jupiter from "../../planet/jupiter";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls,Stars  } from "@react-three/drei";
import * as THREE from "three";
import React, { Suspense , Component} from "react";
import { Sun } from "../sun";
import { Link } from "react-router-dom";


export  function Jupiterpage() {
  return (
    
    <div className="container_jupiter">
      <div className="text_jupiter">
      <div className="title_jupiter">Diễn đàn khoa Công nghệ thông tin</div>
      <div className="content_jupiter">
        <div className="title_content_jupiter"> </div>
        <div className="text_content_jupiter">
          <p>Diễn đang khoa Công nghệ thông tin trường Đại học Văng Lang là nơi trao đổi kiến thức và học tập cho sinh viên khoa Công nghệ thông tin</p>
          <p>Là nơi giải đáp các thắc mắc trong quá trình học tập, giúp sinh viên và giảng viên kết nối với nhau</p>
        <Link className="content_jupiter_link">Tìm hiểu thêm</Link>
          
       </div>
       
      </div>

      </div>
      <div id="jupiter">
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}  >
        <Suspense fallback={null}>
          
          {/* < Sun/> */}
          <Lights/>
          
            <Jupiter/>     

        </Suspense>
      </Canvas>
      </div>
      
    </div>

  );

  function Lights() {
    return (
      <>
        <ambientLight />
        <pointLight position={[0, 0, 3]} />
      </>
    );
  }
}
