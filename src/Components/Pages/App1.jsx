
import { useState } from "react";
import Button from "./Components/Button";
import { student_data } from "./js/data";
import Bulb from "./Components/Bulb";
import { sculptureList } from "./js/data";

import Card from "./Components/card";

function App() {
  /*lifting state up*/
  const [count, setCount] = useState(0);
  const [showClickme, setShowClickme] = useState(true);


  const handleClick = () => {
    setCount(count + 1);
    setShowClickme(!showClickme);
  };
  const handleClick2 = () => {
    setCount(count - 1);
    setShowClickme(!showClickme);
  };



  /*conditional rendering*/
  const isLoading = false;

  if (isLoading) return <h1 className="text-xl text-slate-700">Loading...</h1>;

  // let btnComponent ;
  // if(showClickme) {
  //   btnComponent =(
  //     <Button handleClick={handleClick} text={"Click increase"}  /> 
  //   );
  // }else{
  //   btnComponent = (
  //     <Button handleClick={handleClick2} text="Click decrease"  />
  //   );
  // }

  const [currentIndex, setCurrentIndex] = useState(0);

  let currentIndexNumber = currentIndex;

  let data = sculptureList[currentIndex];
  // console.log(data, "data");
  const totalSculptureList = sculptureList.length;
  console.log(totalSculptureList, 'hi');


  const nextItem = () => {
    if (currentIndex < totalSculptureList - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }
  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalSculptureList - 1);
    }
  }



  return (
    <> {/*react fragment*/}
      <div className="w-full h-full">
        <div className="px-[60px] py-[60px] hidden">

          <h1 className="text-[32px] font-bold">React App</h1>

          {/* Another type of conditional rendering */}
          {/* { count === 0 && <div>count is Zero</div> }
         
          {
            showClickme ? 
            <Button handleClick={handleClick}> {"Click increase"} </Button> 
            : <Button handleClick={handleClick2}> {"Click decrease"} </Button>
            } */}

          {/* {
            btnComponent
            } */}

          {/* updater function  */}
          <div className="mt-[10px]">
            <Button handleClick={() => {
              //state snapshot
              //batching
              // setCount(count + 1); //zero
              // setCount(count + 1); //zero
              // setCount(count + 1); //zero

              //updater function
              setCount((prev) => prev + 1);
              setCount((prev) => prev + 1);
              setCount((prev) => prev + 1);
            }}>
              {"Click me"}
            </Button>
            {count}
          </div>

          <ul className="flex flex-col gap-3 ">
            {
              student_data.map((item) => (
                <li className="px-3 py-2 border-1 border-slate-900 rounded-xl" key={item.id}>{item.name}</li>
              ))
            }
          </ul>
        </div>
        {/* <Bulb /> */}

        <div className="m-auto mt-4 flex justify-center items-center  relative pt-[40px] w-[450px]">
          <div className="absolute top-0 flex gap-2 justify-end right-0">
            <Button handleClick={prevItem}>
              {"Prev"}
            </Button>
            <Button handleClick={nextItem}>
              {"Next"}
            </Button>
          </div>
          
          <Card
            data={data}
            totalSculptureList = {totalSculptureList}
            currentIndexNumber={currentIndexNumber}
          />
        </div>

      </div>

    </>
  )
}

export default App;
