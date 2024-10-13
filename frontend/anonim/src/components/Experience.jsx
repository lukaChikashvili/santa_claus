import { OrbitControls, useTexture } from '@react-three/drei'
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
    uHeight: { value: 0.3 },
    uFrequency: { value: new THREE.Vector2(1.5, 1)},
    uTexture: {value: paper}
  });



  useFrame(() => {
      uniforms.current.uTime.value += 0.04;
  })

  return (
  <>



        

<mesh position-y = {-0.3} >
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
