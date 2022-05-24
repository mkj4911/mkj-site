import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.getElementById('canvas');

// scene
const scene = new THREE.Scene();

// size
const sizes = {
  width: innerWidth,
  height: innerHeight,
};

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 3000);
camera.position.set(0, -300, 1200);
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

// envimage 環境マップ
const urls = [
  // "./envimage/right.png",
  // "./envimage/left.png",
  // "./envimage/up.png",
  // "./envimage/down.png",
  // "./envimage/front.png",
  // "./envimage/back.png",

  "./assets/envImage/posx.jpg",
  "./assets/envImage/negx.jpg",
  "./assets/envImage/posy.jpg",
  "./assets/envImage/negy.jpg",
  "./assets/envImage/posz.jpg",
  "./assets/envImage/negz.jpg",
];
const loader = new THREE.CubeTextureLoader();
scene.background = loader.load(urls);


// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// cubecamera
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(700);
const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
scene.add(cubeCamera);

// object
const material = new THREE.MeshBasicMaterial({
  envMap: cubeRenderTarget.texture,
  reflectivity: 0.9,
});
const geometry = new THREE.SphereGeometry(500, 50, 50);
const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(0, 100, 0);
scene.add(sphere);


function animate() {
  controls.update();
  cubeCamera.update(renderer, scene);
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
}

animate();