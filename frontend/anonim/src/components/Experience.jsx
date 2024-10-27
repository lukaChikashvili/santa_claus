import { OrbitControls, Reflector, useTexture } from '@react-three/drei'
import texture from '../assets/christmas.jpg'
import blue from '../assets/blue.jpg'
import snow from '../assets/snow.jpg'

const Experience = () => {

     // add texture
     const chris = useTexture(texture);
     const blueImg = useTexture(blue);
     const snowImg = useTexture(snow);


   
  return (
  <>
     
      <Reflector 
       blur={[400, 100]}
       resolution={1024}
       mixBlur={1}
       mixStrength={1}
       depthScale={1}
       minDepthThreshold={0.8}
       maxDepthThreshold={1}
       rotation = {[-Math.PI / 2, 0, 0]}
       args={[60, 60]}
       position={[0, -2, 0]}
       
       
       >
       {(Material, props) => <meshStandardMaterial {...props} map={snowImg} roughness={0.3} metalness={0.6} />}
      </Reflector>

      <mesh position={[0, 10, -15]} rotation={[0, 0, 0]}>
        <planeGeometry args={[40, 20]} />
        <meshStandardMaterial map={snowImg} roughness={0.8} metalness={0.5} />
      </mesh>


      <mesh position={[-20, 10, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial map={snowImg} roughness={0.8} metalness={0.5} />
      </mesh>


      <mesh position={[20, 10, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial map={snowImg} roughness={0.8} metalness={0.5} />
      </mesh>
  </>

  )
}

export default Experience
