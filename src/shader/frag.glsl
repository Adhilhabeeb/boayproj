
varying  vec3 modepo;
 uniform sampler2D baseco;
 uniform sampler2D wate;

 
 uniform sampler2D roughv;

uniform float time;
varying vec2 vuv;

// Improved Perlin Noise Function
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f =fract( ceil(mod(p,vuv)));
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.y) + (c - a) * u.y * (b - d) * u.x * u.y;
}

// Fractal Brownian Motion (FBM) for layered noise
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;

    for (int i = 0; i < 5; i++) {  // 5 noise layers for smooth details
        value -= amplitude * smoothNoise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

// Oil effect with swirls and smooth noise
void main() {
    vec2 uv = vuv*4.;
   
vec4 color1 = texture(baseco, vuv); 
vec4 color2 = texture(roughv, vuv);  
vec4 water = texture(wate, vuv);  



    vec4 finalColor = mix(color1, color2, 0.5); // Mix them 50-50
  
  

    float n = fbm(uv * 2.0 + time * 0.5);
    float swirl = sin(uv.x * 6.0 + time) * cos(uv.y * 6.0 + time * 0.7);
    float oilPattern = mix(n, swirl, 0.6);

    vec3 oilColor = vec3(
        0.3 * sin(oilPattern * 3.0 * time*0.03),
          0.3 * sin(oilPattern * 3.0 * time)
        ,  0.3 * sin(oilPattern * 3.0 + time)
        // 0.7 * 0.3 * sin(oilPattern * 5.0 - time)
    );

    gl_FragColor = vec4(vec3(step(0.4,1.-float(oilColor*modepo)),0.,0.),1.);

if( gl_FragColor.x==0.) {
  //     this is oil   color giving session 

    gl_FragColor=finalColor;
//    gl_FragColor = vec4(vec3(1.),1.);
  
}else{

  //     this is sea   color giving session 
    vec2 waveUV = vuv + vec2(0.02 * sin(time + vuv.y * 10.0), 0.02 * cos(time + vuv.x * 10.0));

float wave = 0.2 * sin(waveUV.x * 10.0 + time) * cos(waveUV.y * 10.0 + time );

// vec3 oceanColor = vec3(0.31, 0.29, 0.29) + wave;
// gl_FragColor = vec4(oceanColor, 1.0);
gl_FragColor = vec4(0.3, 0.5, 0.7, 1.0);  // Muted blue with a warm feel
gl_FragColor = vec4(0.0, 0.45, 0.65, 1.0);  // Deep teal ocean
gl_FragColor = vec4(0.4, 0.51, 0.67, 1.0)-wave;  // Dark ocean water

gl_FragColor =vec4(vec3(184.0 / 255.0, 164.0 / 255.0, 125.0 / 255.0),1.);
gl_FragColor *=vec4(vec3(color1.rgb),1.);
gl_FragColor *=vec4(vec3(184.0 / 255.0, 164.0 / 255.0, 125.0 / 255.0),water.b);
gl_FragColor +=vec4(vec3(0.1),1.);







}
}
