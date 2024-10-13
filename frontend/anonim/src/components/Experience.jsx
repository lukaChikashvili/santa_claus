import { OrbitControls } from '@react-three/drei'
import React, { useRef } from 'react'
import vertexShader from '../shaders/vertexShader.glsl';
import fragmentShader from '../shaders/fragmentShader.glsl';
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';

const Experience = () => {

  const uniforms = useRef({
    uTime: { value: 0},
    uHeight: { value: 0.3 },
    uFrequency: { value: new THREE.Vector2(2, 1)},
  });


  useFrame(() => {
      uniforms.current.uTime.value += 0.04;
  })

  return (
  <>
        <OrbitControls makeDefault />


        

<mesh >
  <planeGeometry args={[6, 5, 64, 64]} />
  <shaderMaterial 
  wireframe = {true} 
  vertexShader={vertexShader}
  fragmentShader={fragmentShader}
  uniforms={uniforms.current}
  />

</mesh>
     
  </>
  )
}

export default Experience
