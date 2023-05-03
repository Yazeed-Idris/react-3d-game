import {useEffect, useRef} from "react";
import * as THREE from 'three'
function App() {
  const sceneContainerRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('skyblue')
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(sceneContainerRef.current.clientWidth, sceneContainerRef.current.clientHeight)
    sceneContainerRef.current.append(renderer.domElement)

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;

    renderer.render(scene, camera)

    return () => {
      sceneContainerRef.current.removeChild(sceneContainerRef.current.firstChild)
    }

  })

  return (
    <div className={'bg-blue-500 h-screen'} ref={sceneContainerRef}>

    </div>
  )
}

export default App
