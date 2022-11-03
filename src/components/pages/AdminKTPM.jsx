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

export function AdminKTPM() {
  const [name, setName] = useState('')
  const [instruction, setInstruction] = useState([])
  const [educationProgram, setEducationProgram] = useState([])
  const [career, setCareer] = useState([])

  const handleSave = () => {
    updateDoc(doc(db, 'KTPM', 'IOuLYIQrzOojvTffdWjE'), {
      name,
      instruction,
      educationProgram,
      career,
    })
  }

  const getData = async () => {
    const dataDoc = doc(db, 'KTPM', 'IOuLYIQrzOojvTffdWjE')
    const dataRes = await getDoc(dataDoc)
    if (dataRes) {
      const data = dataRes.data()
      setName(data.name)
      setInstruction(data.instruction)
      setEducationProgram(data.educationProgram)
      setCareer(data.career)
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
          <p className="instruction">Chương trình đào tạo:</p>
          {educationProgram.length > 0 &&
            educationProgram.map((item, idx) => (
              <div key={item + idx} className="list-textarea">
                <textarea
                  className="admin-textarea"
                  value={item}
                  onChange={(e) => {
                    const temp = [...educationProgram]
                    temp[idx] = e.target.value

                    setEducationProgram(temp)
                  }}
                />
                <button
                  className="admin-btn delete-btn"
                  onClick={() => {
                    const temp = [...educationProgram]
                    temp.splice(idx, 1)
                    setEducationProgram(temp)
                  }}
                >
                  Xoá
                </button>
              </div>
            ))}
          <button
            className="admin-btn add-btn"
            onClick={() => setEducationProgram([...educationProgram, ''])}
          >
            Thêm nội dung
          </button>
        </div>

        <div className="instruction-field">
          <p className="instruction">Định hướng nghề nghiệp:</p>
          {career.length > 0 &&
            career.map((item, idx) => (
              <div key={item + idx} className="list-textarea">
                <textarea
                  className="admin-textarea"
                  value={item}
                  onChange={(e) => {
                    const temp = [...career]
                    temp[idx] = e.target.value

                    setCareer(temp)
                  }}
                />
                <button
                  className="admin-btn delete-btn"
                  onClick={() => {
                    const temp = [...career]
                    temp.splice(idx, 1)
                    setCareer(temp)
                  }}
                >
                  Xoá
                </button>
              </div>
            ))}
          <button
            className="admin-btn add-btn"
            onClick={() => setCareer([...career, ''])}
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
