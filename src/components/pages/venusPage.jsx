import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import Venus from '../../planet/venus'
import './venusPage.css'
import db from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

export function Venuspage() {
  const [data, setData] = useState('')
  const getData = async () => {
    const dataDoc = doc(db, 'KTPM', 'IOuLYIQrzOojvTffdWjE')
    const dataRes = await getDoc(dataDoc)
    setData(dataRes.data())
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="container_venus">
      <div className="text_venus">
        <div className="title_venus">Ngành Kỹ Thuật phần mềm</div>
        <div className="content_venus">
          <div className="title_content_venus">Giới thiệu</div>
          <div className="text_content_venus">
            {data?.instruction?.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
          <div className="title_content_venus">Chương trình đào tạo</div>
          <div className="text_content_venus">
            {data?.educationProgram?.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
          <div className="title_content_venus">Định hướng nghề nghiệp</div>
          <div className="text_content_venus">
            <ul className="text_content_venus_list">
              {data?.career?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="venus">
        <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
          <Suspense fallback={null}>
            {/* < Sun/> */}
            <Lights />

            <Venus />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )

  function Lights() {
    return (
      <>
        <ambientLight />
        <pointLight position={[0, 0, 3]} />
      </>
    )
  }
}
