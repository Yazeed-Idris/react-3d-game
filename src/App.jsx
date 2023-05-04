import {useEffect, useRef} from "react";
import {World} from "./World/World.js";
function App() {
  const sceneContainerRef = useRef(null)

  useEffect(() => {
    const container = sceneContainerRef.current
    const world = new World(container)
    world.start()

    return () => {
     world.end(container)
    }

  })

  return (
    <div className={'bg-blue-500 h-screen'} ref={sceneContainerRef}>

    </div>
  )
}

export default App
