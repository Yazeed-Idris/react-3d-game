import {BackSide, MeshBasicMaterial, TextureLoader} from "three";

export function createSkyboxTexture() {
   const textureLoader = new TextureLoader()

   const ft = textureLoader.load('/trance_skybox/trance_ft.jpg')
    const bk = textureLoader.load('/trance_skybox/trance_bk.jpg')
    const up = textureLoader.load('/trance_skybox/trance_up.jpg')
    const dn = textureLoader.load('/trance_skybox/trance_dn.jpg')
    const rt = textureLoader.load('/trance_skybox/trance_rt.jpg')
    const lf = textureLoader.load('/trance_skybox/trance_lf.jpg')

    const texturesArray = [
        ft,
        bk,
        up,
        dn,
        rt,
        lf,
    ]

    const materialsArray = texturesArray.map(texture => {
        const material = new MeshBasicMaterial({
            map: texture,
            side: BackSide,
        })

        return material
    })

    return materialsArray

}
