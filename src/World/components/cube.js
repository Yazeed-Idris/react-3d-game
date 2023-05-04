import {BoxGeometry, Mesh, MeshStandardMaterial} from "three";

export function createCube() {
    const geometry = new BoxGeometry( 1, 1, 1 );
    const material = new MeshStandardMaterial( { color: 0x0000ff } );
    const cube = new Mesh( geometry, material );

    return cube
}
