// import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: '#3153A8' });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;



// const canvas = document.querySelector('canvas');
// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize(window.innerWidth, window.innerHeight);

// window.addEventListener('resize', () => {
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
// });

// const clock = new THREE.Clock();
// function animate() {
//   window.requestAnimationFrame(animate);
//   renderer.render(scene, camera);
//   const delta = clock.getDelta();
//   cube.rotation.x += delta;
//   cube.rotation.y += delta;
// }
// animate();



// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// // Create a scene
// const scene = new THREE.Scene();

// // Create a camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Create a geometry (box)
// const geometry = new THREE.BoxGeometry(1, 1, 1);

// // Create a basic material
// const material = new THREE.MeshBasicMaterial({ color: '#31A2CC', wireframe: true });

// // Create a mesh by combining the geometry and material
// const cube = new THREE.Mesh(geometry, material);

// // Add the cube to the scene
// scene.add(cube);

// // Create a renderer
// const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
// renderer.setSize(window.innerWidth, window.innerHeight);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true; // Enable damping for smoother rotation
// controls.autoRotate = true;
// controls.autoRotateSpeed = 10.0;


// // Animation loop
// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();

//   // Rotate the cube
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;

//   // Render the scene
//   renderer.render(scene, camera);
// }

// // Start the animation loop
// animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });



// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import GUI from 'lil-gui';


// // Create a scene
// const scene = new THREE.Scene();

// // Create a camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Add studio lighting

// // Add a high-intensity directional light
// // const highIntensityLight = new THREE.DirectionalLight(0xffffff, 2);
// // highIntensityLight.position.set(10, 10, 10);
// // scene.add(highIntensityLight);



// // Key light
// // const keyLight = new THREE.DirectionalLight(0xffffff, 1);
// // keyLight.position.set(5, 5, 5);
// // scene.add(keyLight);

// // // Fill light
// // const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
// // fillLight.position.set(-5, 5, 5);
// // scene.add(fillLight);

// // // Back light
// // const backLight = new THREE.DirectionalLight(0xffffff, 0.7);
// // backLight.position.set(0, 5, -5);
// // scene.add(backLight);

// // Ambient light for overall illumination
// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);




// const directional = new THREE.DirectionalLight(0xffffff, 1);
// directional.position.set(3, 20, 4);
// scene.add(directional);

// const helper = new THREE.DirectionalLightHelper(directional, 1);
// scene.add(helper);

// const pointLight = new THREE.PointLight(0xffffff, 1);
// pointLight.position.set(0, 10, 0);
// scene.add(pointLight);

// const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
// scene.add(pointLightHelper);

// // Add light helpers for all lights

// // Helper for high-intensity directional light
// // const highIntensityLightHelper = new THREE.DirectionalLightHelper(highIntensityLight, 1);
// // scene.add(highIntensityLightHelper);

// // // Helper for key light
// // const keyLightHelper = new THREE.DirectionalLightHelper(keyLight, 1);
// // scene.add(keyLightHelper);

// // // Helper for fill light
// // const fillLightHelper = new THREE.DirectionalLightHelper(fillLight, 1);
// // scene.add(fillLightHelper);

// // // Helper for back light
// // const backLightHelper = new THREE.DirectionalLightHelper(backLight, 1);
// // scene.add(backLightHelper);

// // // Helper for ambient light (note: AmbientLight doesn't have a helper)
// // // We can create a custom helper to visualize its presence
// // const ambientLightHelper = new THREE.PointLightHelper(new THREE.PointLight(ambientLight.color, ambientLight.intensity), 0.5);
// // ambientLightHelper.position.set(0, 0, 0);
// // scene.add(ambientLightHelper);


// // Create a geometry (cube)
// // let geometry = new THREE.BoxGeometry(1, 1, 1);

// // Create a basic material
// // let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// // Create a mesh by combining the geometry and material
// // const cube = new THREE.Mesh(geometry, material);
// // const geometry = new THREE.SphereGeometry(1, 10, 10);

// // Creating a texture

// const loader = new THREE.TextureLoader();
// let color = loader.load("./text/paper_0025_color_1k.jpg")
// let roughness = loader.load("./text/paper_0025_roughness_1k.jpg");
// let normal = loader.load("./text/paper_0025_normal_opengl_1k.png");
// let height = loader.load("./text/paper_0025_height_1k.png");




// const geometry = new THREE.BoxGeometry(3, 1.8, 2);
// const material = new THREE.MeshStandardMaterial({ map: color, roughnessMap: roughness, normalMap: normal, heightMap: height, roughness: 0.5 });
// const sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);

// // Add the cube and sphere to the scene
// // scene.add(cube);
// // scene.add(sphere);

// // Create a renderer
// const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
// renderer.setSize(window.innerWidth, window.innerHeight);


// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// // controls.autoRotate = true;
// // controls.autoRotateSpeed = 10.0;
// // controls.dampingFactor = 0.02;

// // Animation loop
// function animate() {
//   requestAnimationFrame(animate);

//   // Rotate the cube
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;

//   // Render the scene
//   renderer.render(scene, camera);
//   controls.update();
// }

// // Start the animation loop
// animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // Function to handle window resize
// function onWindowResize() {
//   // Update camera aspect ratio
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();

//   // Update renderer size
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// // Add event listener for window resize
// window.addEventListener('resize', onWindowResize);


// // Create GUI
// const gui = new GUI();

// // Assuming we have a mesh named 'cube' with a material
// // If not, you'll need to adjust this code accordingly

// // Material folder
// const materialFolder = gui.addFolder('Material');
// materialFolder.addColor(material, 'color').name('Color');
// materialFolder.add(material, 'wireframe');
// materialFolder.add(material, 'transparent');
// materialFolder.add(material, 'opacity', 0, 1);
// materialFolder.add(material, 'roughness', 0, 1).name('Roughness');
// materialFolder.open();

// // Mesh folder
// const meshFolder = gui.addFolder('Mesh');
// meshFolder.add(sphere.position, 'x', -5, 5).name('Position X');
// meshFolder.add(sphere.position, 'y', -5, 5).name('Position Y');
// meshFolder.add(sphere.position, 'z', -5, 5).name('Position Z');
// meshFolder.add(sphere.rotation, 'x', 0, Math.PI * 2).name('Rotation X');
// meshFolder.add(sphere.rotation, 'y', 0, Math.PI * 2).name('Rotation Y');
// meshFolder.add(sphere.rotation, 'z', 0, Math.PI * 2).name('Rotation Z');
// meshFolder.add(sphere.scale, 'x', 0.1, 5).name('Scale X');
// meshFolder.add(sphere.scale, 'y', 0.1, 5).name('Scale Y');
// meshFolder.add(sphere.scale, 'z', 0.1, 5).name('Scale Z');
// meshFolder.close();

// // Lights folder
// const lightsFolder = gui.addFolder('Lights');

// // Assuming we have an ambient light and a directional light in the scene
// // If not, you'll need to create them first

// // Ambient Light
// const ambientLightFolder = lightsFolder.addFolder('Ambient Light');
// ambientLightFolder.addColor(ambientLight, 'color').name('Color');
// ambientLightFolder.add(ambientLight, 'intensity', 0, 1).name('Intensity');

// // Directional Light
// const directionalLightFolder = lightsFolder.addFolder('Directional Light');
// directionalLightFolder.addColor(directional, 'color').name('Color');
// directionalLightFolder.add(directional, 'intensity', 0, 1).name('Intensity');
// directionalLightFolder.add(directional.position, 'x', -10, 10).name('Position X');
// directionalLightFolder.add(directional.position, 'y', -10, 10).name('Position Y');
// directionalLightFolder.add(directional.position, 'z', -10, 10).name('Position Z');

// // Function to update lights when GUI changes
// function updateLights() {
//   ambientLight.color.setHex(ambientLight.color.getHex());
//   directional.color.setHex(directional.color.getHex());
// }

// // Add onChange event to all controllers in lightsFolder
// lightsFolder.controllers.forEach(controller => {
//   controller.onChange(updateLights);
// });

// lightsFolder.open();


// // Function to update the rendering when GUI changes
// function updateMaterial() {
//    sphere.material.needsUpdate = true;
// }

// function updateMesh() {
//   sphere.geometry.attributes.position.needsUpdate = true;
// }
// // Add onChange event to all controllers in materialFolder
// materialFolder.controllers.forEach(controller => {
//   controller.onChange(updateMaterial);
// });
// meshFolder.controllers.forEach(controller => {
//   controller.onChange(updateMesh);
// });


// // Initial call to set the correct size
// renderer.setSize(window.innerWidth, window.innerHeight);


import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const canvas = document.querySelector('canvas');



// Modify the loader callback to use the positioning function
const loader = new GLTFLoader();
loader.load('./cooler_box.glb', function (gltf) {
  const model = gltf.scene;
  gltf.scene.position.z = -3;
  scene.add(model);
});

// Create renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Load HDRI environment map
new RGBELoader()
  .setPath('./')
  .load('qwantani_patio_1k.hdr', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    // scene.background = texture;
    scene.environment = texture;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });

// Handle window resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}



