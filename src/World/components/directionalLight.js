import {DirectionalLight} from "three";

export function createDirectionalLight() {
    const light = new DirectionalLight('white', 5)
    light.position.set(10, 10, 10)

    return light
}
