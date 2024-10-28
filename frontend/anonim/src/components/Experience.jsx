import { OrbitControls,  useTexture } from '@react-three/drei'
import wood from '../assets/wood.jpg'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'

const Experience = () => {

     // add texture
    const woodTexture = useTexture(wood);


   
  return (
  <>
     <OrbitControls makeDefault minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4} />


     <EffectComposer multisampling={0}>
        <Bloom width={256}  height={256} mipmapBlur />
     </EffectComposer>

       <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} >
         <planeGeometry args={[40, 40]}/>
         <meshStandardMaterial map={woodTexture} />
       </mesh>

       <mesh castShadow position={[0, 6, 0]}>
        <boxGeometry args={[10, 3, 10, 10]} />
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
  </>

  )
}

export default Experience
