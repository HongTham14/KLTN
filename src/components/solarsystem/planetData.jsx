import MercuryMap from "../../assets/textures/8k_mercury.jpg";
import VenusMap from "../../assets/textures/8k_venus_surface.jpg";
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import MarsMap from "../../assets/textures/8k_mars.jpg";
import JupiterMap from "../../assets/textures/8k_jupiter.jpg";

const random = (a, b) => a + Math.random() * b;


const context = ["KHOA CÔNG NGHỆ THÔNG TIN", "NGÀNH KỸ THUẬT PHẦN MỀM","NGÀNH KHOA HỌC DỮ LIỆU", "DIỄN ĐÀN"];
const textures = [MercuryMap, VenusMap, EarthDayMap,MarsMap, JupiterMap];
const sizedata=[0.7, 0.9, 1.1, 0.9, 1.5];
const planetData = [];
const totalPlanets = 5;
for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    // color: randomColor(),
    xRadius: (index + 1.5) * 4,
    zRadius: (index + 1.5) * 2,
    size: sizedata[index],
    speed: random(0.03, 0.1),
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.01, 0.03),
    textureMap: textures[index],
    idtext: context[index]
  });
}

export default planetData;
