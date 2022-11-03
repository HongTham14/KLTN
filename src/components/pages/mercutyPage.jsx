import { Canvas } from '@react-three/fiber'
import { doc, getDoc } from 'firebase/firestore'
import { Suspense, useEffect, useState } from 'react'
import db from '../../firebaseConfig'
import Mercury from '../../planet/mercury'
import './mercuryPage.css'

export function Mercurypage() {
  const [data, setData] = useState('')
  const getData = async () => {
    const dataDoc = doc(db, 'ITPage', '3KlmClswM19J3bcTlGc2')
    const dataRes = await getDoc(dataDoc)
    setData(dataRes.data())
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <div className="text">
        <div className="title">{data?.name}</div>
        <div className="content">
          <div className="title_content">Giới thiệu</div>
          <div className="text_content">
            {data?.instruction?.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
          <div className="title_content">Công nghệ thông tin có gì thú vị?</div>
          <div className="text_content">
            {data?.interesting?.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
            <div className="title_content">
              Cần những nhân tố nào để học Công nghệ thông tin?
            </div>
            <ul>
              {data?.required?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="merrcury">
        <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
          <Suspense fallback={null}>
            {/* < Sun/> */}
            <Lights />

            <Mercury />
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
