import {BoxGeometry, Mesh, MeshBasicMaterial} from "three";
const defaultMaterial = new MeshBasicMaterial( { color: 0x0000ff } );
export function createCube(width=1 , height=1, depth=1, material=defaultMaterial) {
    const geometry = new BoxGeometry( width, height, depth);
    const cube = new Mesh( geometry, material );

    return cube
}
