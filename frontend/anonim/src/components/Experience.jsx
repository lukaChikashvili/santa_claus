import { OrbitControls } from '@react-three/drei'
import React from 'react'

const Experience = () => {
  return (
  <>
        <OrbitControls />

     <mesh >
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
  </>
  )
}

export default Experience
