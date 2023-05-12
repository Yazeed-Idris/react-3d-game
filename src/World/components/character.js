import {BoxGeometry, Mesh, MeshBasicMaterial} from "three";

export function createCharacter() {
   const characterGeometry = new BoxGeometry( 1, 1, 1);
   const characterMaterial = new MeshBasicMaterial( { color: 0x00ff00 } );
    const character = new Mesh( characterGeometry, characterMaterial );
    character.position.y = 1
    character.tick = (delta) => {
        const moveAmount = 5 * delta
        document.onkeydown = (e) => {
            switch (e.key) {
                case 'w':
                    character.position.z -= moveAmount
                    break
                case 's':
                    character.position.z += moveAmount
                    break
                case 'a':
                    character.position.x -= moveAmount
                    break
                case 'd':
                    character.position.x += moveAmount
                    break
            }
        }
    }
    return character
}


