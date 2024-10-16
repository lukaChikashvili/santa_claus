import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import React, { useRef } from 'react'
import vertexShader from '../shaders/vertexShader.glsl';
import fragmentShader from '../shaders/fragmentShader.glsl';
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import paperImg from '../assets/paper.jpg';


const Experience = () => {

    // load paper texture
    const paper = useTexture(paperImg);


  const uniforms = useRef({
    uTime: { value: 0},
    uHeight: { value: 0.4 },
    uFrequency: { value: new THREE.Vector2(2, 2)},
    uTexture: {value: paper}
  });



  useFrame(() => {
      uniforms.current.uTime.value += 0.04;
  })

  return (
  <>



    <Stars count={2000}/>

<mesh position = {[0, -0.5, 0]} rotation={[0, 0, 0]}  >
  <planeGeometry args={[7, 6, 64, 64]} />
  <shaderMaterial 
  vertexShader={vertexShader}
  fragmentShader={fragmentShader}
  uniforms={uniforms.current}
  />

</mesh>
     
  </>
  )
}

export default Experience
