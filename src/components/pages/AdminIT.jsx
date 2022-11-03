import { Canvas } from '@react-three/fiber'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import '../../App.css'
import db from '../../firebaseConfig/index.js'
import './admin.css'

import { Suspense, useEffect, useState } from 'react'

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 3]} />
    </>
  )
}

export function AdminIT() {
  const [name, setName] = useState('')
  const [instruction, setInstruction] = useState([])
  const [interesting, setInteresting] = useState([])
  const [required, setRequired] = useState([])

  const handleSave = () => {
    updateDoc(doc(db, 'ITPage', '3KlmClswM19J3bcTlGc2'), {
      name,
      instruction,
      interesting,
      required,
    })
  }

  const getData = async () => {
    const dataDoc = doc(db, 'ITPage', '3KlmClswM19J3bcTlGc2')
    const dataRes = await getDoc(dataDoc)
    if (dataRes) {
      const data = dataRes.data()
      setName(data.name)
      setInstruction(data.instruction)
      setInteresting(data.interesting)
      setRequired(data.required)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container_earth">
      <div className="content">
        <div className="name-field">
          <p className="name">Tên:</p>
          <input
            type="text"
            className="admin-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="instruction-field">
          <p className="instruction">Giới thiệu:</p>
          {instruction.length > 0 &&
            instruction.map((item, idx) => (
              <div key={item + idx} className="list-textarea">
                <textarea
                  className="admin-textarea"
                  value={item}
                  onChange={(e) => {
                    const temp = [...instruction]
                    temp[idx] = e.target.value

                    setInstruction(temp)
                  }}
                />
                <button
                  className="admin-btn delete-btn"
                  onClick={() => {
                    const temp = [...instruction]
                    temp.splice(idx, 1)
                    setInstruction(temp)
                  }}
                >
                  Xoá
                </button>
              </div>
            ))}
          <button
            className="admin-btn add-btn"
            onClick={() => setInstruction([...instruction, ''])}
          >
            Thêm nội dung
          </button>
        </div>

        <div className="instruction-field">
          <p className="instruction">Điều thú vị:</p>
          {interesting.length > 0 &&
            interesting.map((item, idx) => (
              <div key={item + idx} className="list-textarea">
                <textarea
                  className="admin-textarea"
                  value={item}
                  onChange={(e) => {
                    const temp = [...interesting]
                    temp[idx] = e.target.value

                    setInteresting(temp)
                  }}
                />
                <button
                  className="admin-btn delete-btn"
                  onClick={() => {
                    const temp = [...interesting]
                    temp.splice(idx, 1)
                    setInteresting(temp)
                  }}
                >
                  Xoá
                </button>
              </div>
            ))}
          <button
            className="admin-btn add-btn"
            onClick={() => setInteresting([...interesting, ''])}
          >
            Thêm nội dung
          </button>
        </div>

        <div className="instruction-field">
          <p className="instruction">Cần những gì</p>
          {required.length > 0 &&
            required.map((item, idx) => (
              <div key={item + idx} className="list-textarea">
                <textarea
                  className="admin-textarea"
                  value={item}
                  onChange={(e) => {
                    const temp = [...required]
                    temp[idx] = e.target.value

                    setRequired(temp)
                  }}
                />
                <button
                  className="admin-btn delete-btn"
                  onClick={() => {
                    const temp = [...required]
                    temp.splice(idx, 1)
                    setRequired(temp)
                  }}
                >
                  Xoá
                </button>
              </div>
            ))}
          <button
            className="admin-btn add-btn"
            onClick={() => setRequired([...required, ''])}
          >
            Thêm nội dung
          </button>
        </div>

        <button className="save-btn admin-btn" onClick={handleSave}>
          Lưu nội dung
        </button>
      </div>
      <div id="earth">
        <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
          <Suspense fallback={null}>
            <Lights />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}
