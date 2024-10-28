import { OrbitControls,  useGLTF,  useTexture } from '@react-three/drei'
import wood from '../assets/wood.jpg'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'

const Experience = () => {

     // add texture
    const woodTexture = useTexture(wood);


    // tree 3d model
    const treeModel = useGLTF('./tree.glb');

// add bloom effect

   
  return (
  <>
     <OrbitControls makeDefault minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4} />




       <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} >
         <planeGeometry args={[40, 40]}/>
         <meshStandardMaterial map={woodTexture} />
       </mesh>

       <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow position={[0, 15, 0]}>
        <boxGeometry args={[5, 40]} />
        <meshStandardMaterial color={[5, 2, 1]} />
       </mesh>

       <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow position={[10, 15, 0]}>
        <boxGeometry args={[5, 40]} />
        <meshStandardMaterial color={[5, 2, 1]} />
       </mesh>

       <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow position={[-10, 15, 0]}>
        <boxGeometry args={[5, 40]} />
        <meshStandardMaterial color={[5, 2, 1]} />
       </mesh>

       <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow position={[-20, 15, 0]}>
        <boxGeometry args={[5, 40]} />
        <meshStandardMaterial color={[5, 2, 1]} />
       </mesh>

       <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow position={[20, 15, 0]}>
        <boxGeometry args={[5, 40]} />
        <meshStandardMaterial color={[5, 2, 1]} />
       </mesh>




      <mesh position={[0, 10, -15]} rotation={[0, 0, 0]}>
        <planeGeometry args={[40, 20]} />
        <meshStandardMaterial map={woodTexture} roughness={0.8} metalness={0.5} />
      </mesh>


      <mesh position={[-20, 10, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial map={woodTexture} roughness={0.8} metalness={0.5} />
      </mesh>


      <mesh position={[20, 10, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial map={woodTexture} roughness={0.8} metalness={0.5} />
      </mesh>

      <primitive object={treeModel.scene} scale = {0.30} position = {[-9, 0, 10]} />
  </>

  )
}

export default Experience
