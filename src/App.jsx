import { useState } from "react";


const App = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  // const handlePointerMove = (a) =>{};




  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      className="w-screen h-screen">
      <div
        style={{
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
        className="absolute w-[30px] h-[30px] rounded-full bg-amber-400 opacity-25 rounded-full 300 top-0 left-0"></div>
    </div>
  )
}

export default App;                                                     