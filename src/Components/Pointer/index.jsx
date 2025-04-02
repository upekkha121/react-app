import { useState } from "react";

const Pointer = () => {
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
            className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0">
            <div
                style={{
                    transform: `translate(${position.x}px,${position.y}px)`,
                }}
                className="absolute w-[30px] h-[30px] rounded-full bg-amber-400 opacity-25 rounded-full 300 top-0 left-0"></div>
        </div>
    )
}

export default Pointer;