import styled from "styled-components";
import "./venusPage.css";
import Mars from "../../planet/mars"
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls,Stars  } from "@react-three/drei";
import * as THREE from "three";
import React, { Suspense , Component} from "react";
import { Sun } from "../sun";


export  function Marspage() {
  return (
    
    <div className="container">
      <div className="text">
      <div className="title">Ngành Kỹ Thuật phần mềm</div>
      <div className="content">
        <div className="title_content">Giới thiệu</div>
        <div className="text_content">
          <p>Khoa Công nghệ Thông tin thành lập vào năm 1995; được thành lập lại theo Quyết định số 106/QĐ/VL-HĐQT, ngày 05/7/2016.</p>
          <p>Năm 2001, Khoa tham gia vào hệ thống đào tạo kỹ sư công nghệ thông tin theo chuẩn Nhật Bản.</p>
          <p>Từ năm 2008 đến 2018, Khoa triển khai đào tạo ngành Kỹ thuật Phần mềm theo chương trình do Carnegie Mellon University (đại học số 1 của Mỹ về kỹ thuật phần mềm) chuyển giao.</p>
       </div>
       <div className="title_content">Chương trình đào tạo</div>
        <div className="text_content">
          <p>Thời gian đào tạo: 4 năm</p>
          <p>Văn bằng: Kỹ sư Công nghệ Thông tin</p>
          <p>Định hướng chuyên sâu: </p>
          <ul>
            <li> Công nghệ Phần mềm</li>
            <li>Công nghệ Dữ liệu</li>
            <li>Tin học Quản trị</li>
            <li>An ninh mạng</li>
          </ul>
       </div>
      </div>

      </div>
      <div id="merrcury">
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}  >
        <Suspense fallback={null}>
          
          {/* < Sun/> */}
          <Lights/>
          
            <Mars/>     

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
