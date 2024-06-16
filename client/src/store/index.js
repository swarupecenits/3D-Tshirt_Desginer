import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#ffc004',
  color1: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './tshirt_bg.jpg',
});

export default state;