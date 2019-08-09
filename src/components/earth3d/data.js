import earth from './img/earth.jpg'
import sky from './img/sky.jpg'

export const option = {
    backgroundColor: '#000',
    globe: {
        baseTexture: earth,
        heightTexture: earth,
        displacementScale: 0.04,
        shading: 'realistic',
        environment: sky,
        realisticMaterial: {
            roughness: 0.9
        },
        postEffect: {
            enable: true
        },
        light: {
            main: {
                intensity: 5,
                shadow: true
            },
            ambientCubemap: {
                texture: 'data-gl/asset/pisa.hdr',
                diffuseIntensity: 0.2
            }
        }
    }
};