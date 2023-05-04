import {BoxGeometry, Mesh} from "three";
import {createSkyboxTexture} from "./skybox_texture.js";

export function createCube() {
    const geometry = new BoxGeometry( 1000, 1000, 1000);
    // const material = new MeshStandardMaterial( { color: 0x0000ff } );
    const materialArray = createSkyboxTexture()
    const cube = new Mesh( geometry, materialArray );

    return cube
}
