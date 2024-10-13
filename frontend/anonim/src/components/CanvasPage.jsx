import React from 'react'
import { Canvas } from '@react-three/fiber'

const CanvasPage = () => {
  return (
 <>
    <Canvas className='canvas'>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
 </>
  )
}

export default CanvasPage
