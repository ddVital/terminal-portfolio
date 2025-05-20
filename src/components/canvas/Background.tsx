// import { useFrame, useThree } from '@react-three/fiber'
// import { Plane } from '@react-three/drei'
// import * as THREE from 'three'
// import { useRef } from 'react'

// interface BackgroundProps {
//   mousePosition: { x: number; y: number }
//   colors?: {
//     color1: string
//     color2: string
//     color3: string
//   }
// }

// export function Background({ mousePosition, colors = {
//   color1: "vec3(120./255., 158./255., 113./255.)",
//   color2: "vec3(224./255., 148./255., 66./255.)",
//   color3: "vec3(232./255., 201./255., 73./255.)"
// } }: BackgroundProps) {
//   const { viewport } = useThree()
//   const targetMouse = useRef(new THREE.Vector2())
//   const currentMouse = useRef(new THREE.Vector2())

//   const shader: THREE.Shader = {
//     uniforms: {
//       time: { value: 0 },
//       mouse: { value: new THREE.Vector2() },
//       mouseVelocity: { value: new THREE.Vector2() },
//       resolution: { value: new THREE.Vector4() }
//     },
//     vertexShader: `
//       uniform float time;
//       varying vec2 vUv;
//       varying vec3 vPosition;
//       uniform vec2 pixels;
//       float PI = 3.141592653589793238;
      
//       void main() {
//         vUv = uv;
//         vPosition = position;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//       }
//     `,
//     fragmentShader: `
//       uniform float time;
//       uniform vec2 mouse;
//       uniform vec2 mouseVelocity;
//       uniform vec4 resolution;
//       varying vec2 vUv;
//       varying vec3 vPosition;
//       float PI = 3.141592653589793238;

//       float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
//       vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
//       vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

//       float noise(vec3 p){
//         vec3 a = floor(p);
//         vec3 d = p - a;
//         d = d * d * (3.0 - 2.0 * d);

//         vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
//         vec4 k1 = perm(b.xyxy);
//         vec4 k2 = perm(k1.xyxy + b.zzww);

//         vec4 c = k2 + a.zzzz;
//         vec4 k3 = perm(c);
//         vec4 k4 = perm(c + 1.0);

//         vec4 o1 = fract(k3 * (1.0 / 41.0));
//         vec4 o2 = fract(k4 * (1.0 / 41.0));

//         vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
//         vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

//         return o4.y * d.y + o4.x * (1.0 - d.y);
//       }

//       float lines(vec2 uv, float offset){
//         return smoothstep(
//           0., 0.5 + offset*0.5,
//           0.5*abs((sin(uv.x*35.) + offset*2.))
//         );
//       }

//       mat2 rotate2D(float angle){
//         return mat2(
//           cos(angle),-sin(angle),
//           sin(angle),cos(angle)
//         );
//       }

//       float random(vec2 p) {
//         vec2 k1 = vec2(
//           23.14069263277926,
//           2.665144142690225
//         );
//         return fract(
//           cos(dot(p, k1)) * 12345.6789
//         );
//       }

//       void main() {
//         vec3 baseFirst = ${colors.color1};
//         vec3 accent = vec3(0., 0., 0.);
//         vec3 baseSecond = ${colors.color2};
//         vec3 baseThird = ${colors.color3};
        
//         // Enhanced mouse influence with velocity
//         float velocityFactor = length(mouseVelocity) * 2.0;
//         float distanceToMouse = length(vPosition.xy - mouse * 2.0);
//         float mouseInfluence = smoothstep(2.0, 0.0, distanceToMouse) * (1.0 + velocityFactor);
        
//         // Create ripple effect from mouse movement
//         float ripple = sin(distanceToMouse * 8.0 - time * 4.0) * 0.5 + 0.5;
//         ripple *= smoothstep(3.0, 0.0, distanceToMouse);
        
//         float timeNoise = noise(vPosition + time * 0.5);
//         float mouseNoise = noise(vPosition + vec3(mouse * 1.5, time * 0.1));
//         float n = mix(timeNoise, mouseNoise, mouseInfluence);

//         // Add ripple effect to rotation
//         vec2 baseUV = rotate2D(n + ripple * 0.2) * vPosition.xy * 0.1;
//         float basePattern = lines(baseUV, 0.5);
//         float secondPattern = lines(baseUV, 0.1);

//         // Color transitions influenced by mouse
//         vec3 mouseColor = mix(baseThird, baseSecond, ripple);
//         vec3 baseColor = mix(mouseColor, baseFirst, basePattern);
//         vec3 secondBaseColor = mix(baseColor, accent, secondPattern);

//         // Add subtle glow around mouse position
//         float glow = smoothstep(1.5, 0.0, distanceToMouse) * 0.15 * velocityFactor;
//         secondBaseColor += glow * baseThird;

//         vec2 uvrandom = vUv;
//         uvrandom.y *= random(vec2(uvrandom.y, 0.4));
//         secondBaseColor.rgb += random(uvrandom) * 0.09;

//         gl_FragColor = vec4(vec3(secondBaseColor), 3.);
//       }
//     `
//   }

//   useFrame((state, delta) => {
//     // Update time uniform
//     shader.uniforms.time.value += 0.018
    
//     // Set target mouse position
//     targetMouse.current.set(mousePosition.x, mousePosition.y)
    
//     // Calculate mouse velocity
//     const mouseVelocity = new THREE.Vector2().subVectors(targetMouse.current, currentMouse.current)
//     shader.uniforms.mouseVelocity.value.copy(mouseVelocity)
    
//     // Smooth mouse movement with lerp (linear interpolation)
//     currentMouse.current.lerp(targetMouse.current, delta * 3.0)
//     shader.uniforms.mouse.value.copy(currentMouse.current)
//   })

//   return (
//     <Plane args={[viewport.width, viewport.height]}>
//       <shaderMaterial args={[shader]} />
//     </Plane>
//   )
// }

// ==============

import { useFrame, useThree } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'

interface BackgroundProps {
  mousePosition: { x: number; y: number }
  colors?: {
    color1: string
    color2: string
    color3: string
  }
}

export function Background({ mousePosition, colors = {
  color1: "vec3(120./255., 158./255., 113./255.)",
  color2: "vec3(224./255., 148./255., 66./255.)",
  color3: "vec3(232./255., 201./255., 73./255.)"
} }: BackgroundProps) {
  const { viewport } = useThree()
  const targetMouse = useRef(new THREE.Vector2())
  const currentMouse = useRef(new THREE.Vector2())

  // Classic Perlin 2D Noise function
  const cnoise21 = `
  //	Classic Perlin 2D Noise 
  //	by Stefan Gustavson
  //
  vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}

  float cnoise21(vec2 P){
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
  }
  `

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

      float random(vec2 p) {
        vec2 k1 = vec2(
          23.14069263277926, // e^pi (Gelfond's constant)
          2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
        );
        return fract(
          cos(dot(p, k1)) * 12345.6789
        );
      }

      const vec3 black = vec3(0.0);
      const vec3 color1 = ${colors.color1};
      const vec3 color2 = ${colors.color2};
      const vec3 color3 = ${colors.color3};

      void main() {
        vec2 seed = v_uv * 1.5 * (u_mouse + 0.1 * (length(u_mouse) + 0.9));
        float n = cnoise21(seed) + length(u_mouse) * 0.9;

        float ml = pow(length(u_mouse), 4.5) * 0.15;
        float n1 = smoothstep(0.0, 0.0 + 0.2, n);
        vec3 color = mix(black, color1, n1);
        
        float n2 = smoothstep(0.1 + ml, 0.1 + ml + 0.2, n);
        color = mix(color, color2, n2);

        float n3 = smoothstep(0.2 + ml, 0.2 + ml + 0.2, n);
        color = mix(color, color3, n3);

        float n4 = smoothstep(0.3 + ml, 0.4 + ml + 0.2, n);
        color = mix(color, black, n4);

        vec2 uvrandom = v_uv;
        uvrandom.y *= random(vec2(uvrandom.y, 0.4));
        color.rgb += random(uvrandom) * 0.09;

        gl_FragColor = vec4(color, 1.0);
      }
    `
  }

  useFrame((state, delta) => {
    // Update time uniform
    shader.uniforms.u_time.value += 0.9
    
    // Set target mouse position - convert from [-1,1] to [0,1] range
    targetMouse.current.set(
      (mousePosition.x + 1) * 0.5, 
      (mousePosition.y + 1) * 0.5
    )
    
    // Smooth mouse movement with lerp (linear interpolation)
    currentMouse.current.lerp(targetMouse.current, 0.1)
    shader.uniforms.u_mouse.value.copy(currentMouse.current)
  })

  return (
    <Plane args={[viewport.width, viewport.height]}>
      <shaderMaterial args={[shader]} />
    </Plane>
  )
}
