const torusAnimation = (() => {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    const sphereGeometry = new THREE.SphereGeometry(20, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0x0088ff),
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    const torusGeometry = new THREE.TorusGeometry(30, 1.5, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
        color: 0xffa500,
        wireframe: true,
        transparent: true,
        opacity: 0.2
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);
    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.001;
        sphere.rotation.y += 0.002;
        torus.rotation.z += 0.003;
        let time = Date.now() * 0.0001;
        sphereMaterial.color.setHSL((0.5 + 0.5 * Math.sin(time)) % 1, 0.6, 0.5);
        renderer.render(scene, camera);
    }
    animate();
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
})();
const orbCanvas = document.getElementById("orb-canvas");
if (orbCanvas) {
    const renderer = new THREE.WebGLRenderer({ canvas: orbCanvas, antialias: true, alpha: true });
    renderer.setSize(orbCanvas.clientWidth, orbCanvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, orbCanvas.clientWidth / orbCanvas.clientHeight, 0.1, 1000);
    camera.position.z = 6;
    const sphereGeometry = new THREE.SphereGeometry(2.5, 7, 7);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0x0088ff),
        wireframe: true,
        transparent: true,
        opacity: 0.6
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    function animateOrb() {
        requestAnimationFrame(animateOrb);
        sphere.rotation.x += 0.001;
        sphere.rotation.y += 0.002;
        let time = Date.now() * 0.0005;
        sphereMaterial.color.setHSL((0.5 + 0.5 * Math.sin(time)) % 1, 0.6, 0.5);
        renderer.render(scene, camera);
    }
    animateOrb();
    window.addEventListener("resize", () => {
        const rect = orbCanvas.getBoundingClientRect();
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        renderer.setSize(rect.width, rect.height);
    });
    const hypnoOrb = document.getElementById("hypno-orb");
    hypnoOrb.addEventListener("mouseleave", () => {
        hypnoOrb.classList.add("hovered");
    });
    let hypnoOn = true, hypnoOnN = 0;
    hypnoOrb.addEventListener("click", () => {
        if (hypnoOn) {
            const id = hypnoOnN >= 4 ? "yellow-flash-bar" : "flash-bar";
            document.body.appendChild(Object.assign(document.createElement("div"), { id, textContent: hypnoOnN === 4 ? "WOAH-THERE" : "HYPNO-ORB" }));
            setTimeout(() => document.getElementById(id)?.remove(), 3000);
            hypnoOnN = hypnoOnN >= 4 ? 0 : hypnoOnN + 1;
        }
        hypnoOn = !hypnoOn;
    });
}
function setContainerAlt() {
    document.querySelector('.content-image').setAttribute('alt', document.querySelector('.content-image img').getAttribute('alt'));
};
const setOrbAlt = (() => {
    const orb = document.querySelector('#hypno-orb');
    if (orb) {
        orb.setAttribute('aria-label', "A button to hide the content and show only the colourful background with a 3D wireframe of a large orb and larger torus, changing colours.");
    }
})();