let currentAnimationIndex = 0;
const animations = [
    {
        name: "torusAnimation",
        setup: () => {
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
            return {
                scene, camera, animate: () => {
                    sphere.rotation.x += 0.001;
                    sphere.rotation.y += 0.002;
                    torus.rotation.z += 0.003;
                    const time = Date.now() * 0.0001;
                    sphereMaterial.color.setHSL((0.5 + 0.5 * Math.sin(time)) % 1, 0.6, 0.5);
                }
            };
        }
    },
    {
        name: "cosmicAnimation",
        setup: () => {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 60;
            const cubeGeometry = new THREE.BoxGeometry(20, 20, 20);
            const cubeMaterial = new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                wireframe: true,
                transparent: true,
                opacity: 0.4
            });
            const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            scene.add(cube);
            const ringGeometry = new THREE.RingGeometry(22, 25, 64);
            const ringMaterial = new THREE.MeshBasicMaterial({
                color: 0xff69b4,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.2
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.rotation.x = Math.PI / 2;
            scene.add(ring);
            return {
                scene, camera, animate: () => {
                    cube.rotation.x += 0.01;
                    cube.rotation.y += 0.015;
                    ring.scale.x = 1 + 0.1 * Math.sin(Date.now() * 0.002);
                    ring.scale.y = 1 + 0.1 * Math.sin(Date.now() * 0.002);
                    const time = Date.now() * 0.0003;
                    cubeMaterial.color.setHSL((0.5 + 0.5 * Math.sin(time)) % 1, 0.7, 0.5);
                }
            };
        }
    },
    {
        name: "TorusKnotAnimation",
        setup: () => {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 40;
            const torusKnotGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
            const torusKnotMaterial = new THREE.MeshBasicMaterial({
                color: 0xff4500,
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });
            const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
            scene.add(torusKnot);
            return {
                scene, camera, animate: () => {
                    torusKnot.rotation.x += 0.005;
                    torusKnot.rotation.y += 0.005;
                    torusKnot.rotation.z += 0.0025;
                }
            };
        }
    }
];
const canvas = document.getElementById('background-canvas');
if (canvas) {
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    let { scene, camera, animate } = animations[currentAnimationIndex].setup();
    let isPaused = false;
    let animationFrameId;
    function switchAnimation(direction) {
        if (direction === "next") {
            currentAnimationIndex = (currentAnimationIndex + 1) % animations.length;
        } else if (direction === "previous") {
            currentAnimationIndex = (currentAnimationIndex - 1 + animations.length) % animations.length;
        }
        ({ scene, camera, animate } = animations[currentAnimationIndex].setup());
    }
    function render() {
        if (!isPaused) {
            animationFrameId = requestAnimationFrame(render);
            animate();
            renderer.render(scene, camera);
        }
    }
    render();
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    document.querySelector('#next-button').addEventListener('click', () => {
        switchAnimation("next");
    });
    document.querySelector('#previous-button').addEventListener('click', () => {
        switchAnimation("previous");
    });
    const pauseButton = document.querySelector('#pause-button');
    if (pauseButton) {
        let lastClick = 0;
        let isHidden = false;
        pauseButton.addEventListener('click', (e) => {
            const currentTime = new Date().getTime();
            const timeDiff = currentTime - lastClick;
            if (timeDiff < 300) {
                isHidden = !isHidden;
                canvas.style.display = isHidden ? 'none' : 'block';
                if (isHidden) {
                    cancelAnimationFrame(animationFrameId);
                } else {
                    isPaused = false;
                    pauseButton.classList.remove('paused');
                    pauseButton.innerHTML = '&#10074;&#10074;';
                    render();
                }
            } else {
                if (!isHidden) {
                    isPaused = !isPaused;
                    pauseButton.classList.toggle('paused');
                    pauseButton.innerHTML = isPaused ? '▶' : '&#10074;&#10074;';
                    if (!isPaused) {
                        render();
                    } else {
                        cancelAnimationFrame(animationFrameId);
                    }
                }
            }
            lastClick = currentTime;
        });
    }
}
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
    const controlsContainer = document.getElementById("controls-container");
    [hypnoOrb, controlsContainer].forEach(element =>
        element?.addEventListener("mouseleave", () =>
            element?.classList.add("hovered")
        )
    );
    let hypnoOn = true, hypnoOnN = -1;
    hypnoOrb.addEventListener("click", () => {
        let flashText;
        if (typeof currentAnimationIndex !== "undefined") {
            if (currentAnimationIndex === 0) {
                flashText = "HYPNO-SPHERE";
            } else if (currentAnimationIndex === 1) {
                flashText = "HYPNO-CUBE";
            } else if (currentAnimationIndex === 2) {
                flashText = "HYPNO-KNOT";
            }
        }
        if (hypnoOn) {
            if (hypnoOnN >= 0) {
                const id = hypnoOnN >= 5 ? "yellow-flash-bar" : "flash-bar";
                const flashBar = Object.assign(document.createElement("div"), {
                    id,
                    textContent: hypnoOnN === 5 ? "WOAH-THERE" : flashText
                });
                document.body.appendChild(flashBar);
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) element.remove();
                }, 3000);
                hypnoOnN = hypnoOnN >= 5 ? 0 : hypnoOnN + 1;
            } else {
                hypnoOnN++;
            }
        }
        hypnoOn = !hypnoOn;
    });
}
function setContainerAlt() {
    document.querySelectorAll('.content-image').forEach(container => {
        const img = container.querySelector('img');
        if (img && img.alt) {
            container.setAttribute('alt', img.alt);
        }
    });
}
function setOrbAlt() {
    const orb = document.querySelector('#hypno-orb');
    if (orb) {
        orb.setAttribute('aria-label', "A button to hide the content and show only the colourful background with a 3D wireframe of a large orb and larger torus, changing colours.");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver(() => {
        if (document.querySelectorAll('.content-image').length > 0) {
            setContainerAlt();
        }
    });
    observer.observe(document.getElementById('content'), { childList: true, subtree: true });
    setOrbAlt();
});
function checkForDynamicRedirect() {
    const isStatic = window.location.pathname.includes('/static/');
    if (isStatic && 'requestAnimationFrame' in window) {
        const page = window.location.pathname.split('/').pop().replace('.html', '');
        window.location.href = '../index.html' + (page !== 'index' ? '#' + page : '');
    }
}
window.addEventListener('load', checkForDynamicRedirect);