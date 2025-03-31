import { useState } from "react";


const App = () => {
  const [position,setPosition] = useState({
    x:0,
    y:0,
  });

  // const handlePointerMove = (a) =>{};

  return (
    <div
      onPointerMove={(e)=> }
      className="w-full h-full pt-5 pb-5">
      <div
        style={{
          transform:`translate(${position.x}px,${position.y})`,
        }}
       className="absolute w-[30px] h-[30px] rounded-full bg-amber-400 opacity-25 rounded-full 300 top-0 left-0"></div>
    </div>
  )
}

export default App;                                                     