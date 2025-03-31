import { useState } from "react";
import Button from "../Button";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Card = ({ data, currentIndexNumber, totalSculptureList }) => {

     const [showInfo, setShowInfo] = useState(false);

     const toggleShowInfo = () => {
        setShowInfo(!showInfo);
      }

    return (
        <div className="w-[450px] h-auto border-1  border-gray-300 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 ease-in-out hover:border-white">
            <div className="w-[100%] h-[250px]">
                <img className="w-[100%] h-[100%] object-cover" src={data?.url} alt={data?.alt} />
            </div>
            <div className="p-[20px]">
                <h3 className="text-[28px] font-semibold mb-1">{data?.name}</h3>
                <h4 className="mb-4 text-[16px] bg-blue-400 text-white inline-block px-2 rounded-sm font-medium">{data?.company}</h4>
                <div>
                    <Button handleClick={toggleShowInfo} extraStyles={`!p-0 !border-0 !shadow-none text-[14px] font-[400] flex items-center ${showInfo ? "text-red-400" : "text-blue-400"}`}>{showInfo ? "Hide Info" : "Show Info"} {showInfo ? <MdKeyboardArrowUp size={16} color="text-red-400" /> : <MdKeyboardArrowDown size={16} color="text-blue-400" />}</Button>
                </div>

                {/* conditional rendering */}
                {showInfo && <p className=" text-[16px] text-gray-500 mb-3"> {data?.description}</p>}

                <div className="flex justify-end">
                    <p className="text-[12px] text-gray-500">Page { currentIndexNumber+1} of {totalSculptureList}</p>
                </div>
            </div>
        </div>
    )
}

export default Card