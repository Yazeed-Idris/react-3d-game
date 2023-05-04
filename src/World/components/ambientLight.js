import {HemisphereLight} from "three";

export function createAmbientLight() {
    const light = new HemisphereLight('white', 'red', 3)
    return light
}
