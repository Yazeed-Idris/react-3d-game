import {Clock} from 'three'

const clock = new Clock();

export class Loop {
    #camera;
    #scene;
    #renderer;
    #updatables;
    constructor(camera, scene, renderer) {
        this.#camera = camera;
        this.#scene = scene;
        this.#renderer = renderer;
        this.#updatables = []
    }

    start() {
        this.#renderer.setAnimationLoop(() => {
            this.tick()

            this.#renderer.render(this.#scene, this.#camera)
        })
    }

    stop() {
        this.#renderer.setAnimationLoop(null)
    }

    tick() {
        const delta = clock.getDelta()

        for (const updatable of this.#updatables) {
            updatable.tick(delta)
        }
    }
}
