

// uniform float time;


// varying vec2 vuv;
// varying  vec3 modepo;

// void main() {
   
    
//     gl_FragColor = vec4(0.0, 0.72, 1.0, 1.0);
//         gl_FragColor.xyz+=dot(vuv.x,vuv.y);
//           gl_FragColor.xyz*=smoothstep(0.2,1.,mod(float(modepo),vuv.y));
// }

varying  vec3 modepo;

uniform float time;
varying vec2 vuv;

// Improved Perlin Noise Function
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (b - d) * u.x * u.y;
}

// Fractal Brownian Motion (FBM) for layered noise
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;

    for (int i = 0; i < 5; i++) {  // 5 noise layers for smooth details
        value += amplitude * smoothNoise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

// Oil effect with swirls and smooth noise
void main() {
    vec2 uv = vuv * 4.0;
    uv.x += sin(time * 0.3) * 0.2;
    uv.y += cos(time * 0.2) * 0.2;

    float n = fbm(uv * 2.0 + time * 0.5);
    float swirl = sin(uv.x * 6.0 + time) * cos(uv.y * 6.0 + time * 0.7);
    float oilPattern = mix(n, swirl, 0.6);

    vec3 oilColor = vec3(
        0.3 * sin(oilPattern * 6.0 + time),
        0.5 * 0.5 * cos(oilPattern * 3.0 + time),
        0.7 * 0.3 * sin(oilPattern * 5.0 - time)
    );

    gl_FragColor = vec4(vec3(step(0.4,float(oilColor*modepo)),0.,0.),1.);

if( gl_FragColor.x==0.) {
   gl_FragColor = vec4(vec3(1.),1.);
  
}else{
   gl_FragColor = vec4(vec3(1.,1.,0.),1.);

}
}
