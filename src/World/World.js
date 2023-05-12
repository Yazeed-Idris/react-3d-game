import {createRenderer} from "./systems/renderer.js";
import {createCamera} from "./components/camera.js";
import {createScene} from "./components/scene.js";
import {createCube} from "./components/cube.js";
import {Resizer} from "./systems/Resizer.js";
import {Loop} from "./systems/Loop.js";
import {createDirectionalLight} from "./components/directionalLight.js";
import {createControls} from "./vendor/controls.js";
import {createAmbientLight} from "./components/ambientLight.js";
import {createSkyboxTexture} from "./components/skybox_texture.js";
import {createGroundTerrain} from "./components/ground.js";
import {createCharacter} from "./components/character.js";


export class World {
    #renderer;
    #scene;
    #camera;
    #animationLoop;
    constructor(container) {
        this.#renderer = createRenderer()
        this.#camera = createCamera()
        this.#scene = createScene()
        new Resizer(container, this.#camera, this.#renderer)
        this.#animationLoop = new Loop(this.#camera, this.#scene, this.#renderer)
        this.addWorldToContainer(container)
    }

    addWorldToContainer(container) {
        container.append(this.#renderer.domElement)
    }

    end(container) {
        this.#animationLoop.stop();
        container.removeChild(container.firstChild)
    }

    start() {
        const skybox = createCube(1000, 1000, 1000, createSkyboxTexture())
        const directionalLight = createDirectionalLight()
        const ambientLight = createAmbientLight()

        createControls(this.#camera, this.#renderer.domElement)

        this.#scene.add(skybox, directionalLight, ambientLight)
        this.#camera.position.z += 5

        this.#animationLoop.start()

        const cube = createCube()
        this.#scene.add(cube)

        const ground = createGroundTerrain()
        this.#scene.add(ground)

        const character = createCharacter()
        this.#animationLoop.updatables.push(character)
        this.#scene.add(character)

    }

}
