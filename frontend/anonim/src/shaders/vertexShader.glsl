uniform float uHeight;
uniform vec2 uFrequency;
uniform float uTime;
varying vec2 vUv;

void main() {
       vec4 modelPosition = modelMatrix * vec4(position, 1.0);

       modelPosition.x -= 3.0;

         float elevation = sin(modelPosition.x * uFrequency.x + uTime) * 
                           sin(modelPosition.z * uFrequency.y + uTime) * uHeight;

        modelPosition.z += elevation;


       vec4 viewPosition = viewMatrix * modelPosition;
       vec4 projectedPosition = projectionMatrix * viewPosition;
       gl_Position = projectedPosition;    


       vUv = uv; 


}