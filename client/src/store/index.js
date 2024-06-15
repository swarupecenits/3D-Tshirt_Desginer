import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color1: '#ffc004',
  color1: '#ffc004',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;