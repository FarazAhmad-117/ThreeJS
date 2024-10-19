
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;



// const canvas = document.getElementById('draw');

// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize(window.innerWidth, window.innerHeight);

// function animate() {
//     window.requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
// }

// animate();


// Learning the parts of three js

// scene
// camera
// mesh -> geometry + material
// renderer
// request animation frame


let scene = new THREE.Scene(); // A new world just created -dark and black
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100); // A camera is how we view the scene
scene.add(camera);
camera.position.z = 5;

let box = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 'red', wireframe: true, antialias: true });
let mesh = new THREE.Mesh(box, material);
scene.add(mesh);
// mesh.position.y = 1;
// mesh.position.x = 1;

// mesh.rotation.y = 2;
// mesh.rotation.x = 2;
// mesh.rotation.z = 2;

// mesh.scale.z = 2;
// camera.position.x = 2;

// mesh.rotation.z = Math.PI / 4; // 45 degree
// mesh.rotation.y = Math.PI / 4; // 45 degree


const canvas = document.getElementById('draw');

let renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);


// Now its time for the animation


let clock = new THREE.Clock();
function animation() {
    window.requestAnimationFrame(animation);
    renderer.render(scene, camera);
    let delta = clock.getDelta();
    mesh.rotation.y += delta;
    mesh.rotation.z += delta;
}

animation();
