import { Html, OrbitControls, Text3D, useGLTF, useTexture } from '@react-three/drei';
import wood from '../assets/wood.jpg';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Physics, RigidBody } from '@react-three/rapier';
import gift from '../assets/gift.jpg';
import giftblue from '../assets/giftblue.jpg'
import santa from '../assets/santa.jpg'
import switchImg from '../assets/switch.webp'
import { useState } from 'react';


const Experience = () => {
  // Add texture
  const woodTexture = useTexture(wood);
  const giftTexture = useTexture(gift);
  const giftblueTexture = useTexture(giftblue);
  const santaTexture = useTexture(santa);
  const switchTexture = useTexture(switchImg)
  
  // Load tree 3D model
  const treeModel = useGLTF('./tree.glb');
  const sofaModel = useGLTF('./sofa.glb');


  return (
    <>
      <OrbitControls makeDefault minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4} />
      
      <Physics>
     
        <RigidBody type='fixed'>
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[40, 40]} />
            <meshStandardMaterial map={woodTexture} />
          </mesh>
        </RigidBody>

   
        {[-20, -10, 0, 10, 20].map((pos) => (
          <mesh key={pos} rotation={[-Math.PI / 2, 0, 0]} castShadow position={[pos, 15, 0]}>
            <boxGeometry args={[5, 40]} />
            <meshStandardMaterial color={[5, 2, 1]} />
          </mesh>
        ))}

       
        <RigidBody mass={1} restitution={0.7} friction={0.5} colliders="cuboid">
          <mesh  position={[0, 20, 0]}>
            <boxGeometry args={[4, 4, 4]} />
            <meshStandardMaterial map={giftTexture}/>
          </mesh>
        </RigidBody>

        <RigidBody mass={1} restitution={0.7} friction={0.5} colliders="cuboid">
          <mesh  position={[4, 30, 2]}>
            <boxGeometry args={[4, 4, 4]} />
            <meshStandardMaterial map={giftblueTexture}/>
          </mesh>
        </RigidBody>

       

<RigidBody type='fixed'>
        <mesh position={[0, 10, -15]} rotation={[0, 0, 0]}>
          <planeGeometry args={[40, 20]} />
          <meshStandardMaterial map={woodTexture} roughness={0.8} metalness={0.5} />
        </mesh>
        </RigidBody>

        <RigidBody type='fixed'>
        <mesh position={[-20, 10, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[30, 20]} />
          <meshStandardMaterial map={woodTexture} roughness={0.8} metalness={0.5} />
        </mesh>
        </RigidBody>

        <RigidBody type='fixed'>
        <mesh position={[20, 10, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[30, 20]} />
          <meshStandardMaterial map={woodTexture} roughness={0.8} metalness={0.5} />
        </mesh>
        </RigidBody>

        <mesh position={[-15, 8, 12]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[3, 4]} />
          <meshStandardMaterial map={santaTexture} />
        </mesh>


        <primitive object={treeModel.scene} scale={0.3} position={[-9, 0, 10]} />
        <primitive object={sofaModel.scene} scale={7} position={[-9, 0, -8]} />
        </Physics>


 
    </>
  );
};

export default Experience;
