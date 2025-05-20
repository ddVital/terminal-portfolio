import { useFrame } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import * as THREE from 'three'
import { cnoise21 } from '../../utils/noise'

interface ProjectBackgroundProps {
  mousePosition: { x: number; y: number }
  colors: {
    color1: string
    color2: string
    color3: string
  }
}

export function ProjectBackground({ mousePosition, colors }: ProjectBackgroundProps) {
  const shader: THREE.Shader = {
    uniforms: {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2() }
    },
    vertexShader: `
      varying vec2 v_uv;
      void main() {
        v_uv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float u_time;
      uniform vec2 u_mouse;
      varying vec2 v_uv;
      
      ${cnoise21}

      void main() {
        const vec3 black = vec3(0.0);
        const vec3 color1 = ${colors.color1};
        const vec3 color2 = ${colors.color2};
        const vec3 color3 = ${colors.color3};
        
        vec2 seed = v_uv * 1.0 * (u_mouse + 0.3 * (length(u_mouse) + 0.5));
        float n = cnoise21(seed) + length(u_mouse) * 0.9;
        
        float ml = pow(length(u_mouse), 2.9) * 0.15;
        
        float n1 = smoothstep(0.0, 0.4, n);
        vec3 color = mix(black, color1, n1);
        
        float n2 = smoothstep(0.1 + ml, 0.5 + ml, n);
        color = mix(color, color2, n2);
        
        float n3 = smoothstep(0.2 + ml, 0.6 + ml, n);
        color = mix(color, color3, n3);
        
        float n4 = smoothstep(0.3 + ml, 0.7 + ml, n);
        color = mix(color, black, n4);

        gl_FragColor = vec4(color, 1.0);
      }
    `
  }

  useFrame(() => {
    shader.uniforms.u_time.value += 0.005
    shader.uniforms.u_mouse.value.set(
      (mousePosition.x + 1) * 0.5,
      (mousePosition.y + 1) * 0.5
    )
  })

  return (
    <Plane args={[2, 2]}>
      <shaderMaterial args={[shader]} />
    </Plane>
  )
}
