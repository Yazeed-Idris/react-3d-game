import {createRenderer} from "./systems/renderer.js";
import {createCamera} from "./components/camera.js";
import {createScene} from "./components/scene.js";
import {createCube} from "./components/cube.js";
import {Resizer} from "./systems/Resizer.js";
import {Loop} from "./systems/Loop.js";


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
        const cube = createCube()
        this.#scene.add(cube)
        this.#camera.position.z += 5

        this.#animationLoop.start()
    }

}
