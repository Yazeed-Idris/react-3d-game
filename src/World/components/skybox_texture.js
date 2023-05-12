import {BackSide, MeshBasicMaterial, TextureLoader} from "three";

export function createSkyboxTexture() {
   const textureLoader = new TextureLoader()
    const folderName = 'trance_skybox'
    const extention = 'jpg'

    const ft = textureLoader.load(`${folderName}/ft.${extention}`)
    const bk = textureLoader.load(`${folderName}/bk.${extention}`)
    const up = textureLoader.load(`${folderName}/up.${extention}`)
    const dn = textureLoader.load(`${folderName}/dn.${extention}`)
    const rt = textureLoader.load(`${folderName}/rt.${extention}`)
    const lf = textureLoader.load(`${folderName}/lf.${extention}`)


   // const ft = textureLoader.load('/trance_skybox/trance_ft.jpg')
   //  const bk = textureLoader.load('/trance_skybox/bk.jpg')
   //  const up = textureLoader.load('/trance_skybox/up.jpg')
   //  const dn = textureLoader.load('/trance_skybox/dn.jpg')
   //  const rt = textureLoader.load('/trance_skybox/trance_rt.jpg')
   //  const lf = textureLoader.load('/trance_skybox/trance_lf.jpg')

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
