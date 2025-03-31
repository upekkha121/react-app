import { useState } from "react"
import Button from "../Button"


const Bulb = () => {
    const [bulbLight, setBulbLight] = useState(false);

    const turnLightOn = () => {
        if (!bulbLight) {
            setBulbLight(!bulbLight);
        }
    }
    const turnLightOff = () => {
        if (bulbLight) {
            setBulbLight(!bulbLight);
        }
    }


    return (
        <div className="w-[70%] lg:w-[600px] m-auto mt-[30px] p-[30px] border-2 border-slate-900 rounded-md">
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className="w-[60%] h-auto">
                    {bulbLight ?
                        <img className="w-full h-full object-cover" src="./bulbOn.jpeg" alt="bulbOff" />
                        : <img className="w-full h-full object-cover" src="./bulbOff.jpeg" alt="bulbOff" />
                    }
                </div>
                <div className="flex gap-[15px]">
                    <Button handleClick={turnLightOn}>
                        {"Turn on the Light"} 
                    </Button>
                    <Button handleClick={turnLightOff}>
                        {"Turn off the Light"} 
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Bulb