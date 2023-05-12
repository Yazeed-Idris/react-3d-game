import { Mesh, MeshPhongMaterial, PlaneGeometry, TextureLoader, RepeatWrapping } from 'three'
export function createGroundTerrain() {
    const textureLoader = new TextureLoader()
    const texture = textureLoader.load('/textures/grass/47056.jpg')
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(100, 100)
    const geometry = new PlaneGeometry(100, 100, 100, 100)
    const material = new MeshPhongMaterial({
        color: 'green',
        map: texture,
        // wireframe: true,
    })
    const mesh = new Mesh(geometry, material)
    mesh.rotation.x = Math.PI * -0.5

    return mesh
}
