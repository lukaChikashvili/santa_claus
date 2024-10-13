import { OrbitControls } from '@react-three/drei'
import React from 'react'
import vertexShader from '../shaders/vertexShader.glsl';
import fragmentShader from '../shaders/fragmentShader.glsl';

const Experience = () => {


  return (
  <>
        <OrbitControls />

<mesh>
  <planeGeometry args={[3, 3, 64, 64]} />
  <shaderMaterial 
  wireframe = {true} 
  vertexShader={vertexShader}
  fragmentShader={fragmentShader}
  />

</mesh>
     
  </>
  )
}

export default Experience
