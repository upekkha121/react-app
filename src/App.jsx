import { useState } from "react";
import Pointer from "./Components/Pointer";
import Input from "./Components/Form/input";
import Button from "./Components/Button";

const App = () => {

  //one way data binding

  const [formData, setFormData] = useState({});

  const handleFormChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="w-screen h-screen">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[450px] h-[70%] bg-amber-100 rounded-md  border-1 border-amber-200 p-5 flex flex-col">
            <h2 className="text-center text-[24px] font-semibold mb-3">Register Now</h2>
            <form action="" className="flex flex-col gap-4 flex-1 ">

              <Input
                onchange={handleFormChange}
                name="email"
                value={formData.email}
                placeholder="Enter your email address"
                label={'Email'}
              />

              <div className="flex items-center gap-[15px]">
                <Input
                  onchange={handleFormChange}
                  name="firstName"
                  value={formData.firstName}
                  placeholder="Enter your Firstname"
                  label={'FirstName'}

                />
                <Input
                  onchange={handleFormChange}
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Enter your Lastname"
                  label={'LastName'}
                />
              </div>
              <Input
                onchange={handleFormChange}
                name="phone"
                value={formData.phone}
                label={'Phone Number'}
                placeholder="Enter your phone number"
              />
              <Input
                onchange={handleFormChange}
                name="address"
                value={formData.address}
                label={'Address'}
                placeholder="Enter your Address"
              />
              <Button extraStyles="mt-3 text-white bg-amber-500 !border-amber-500 !py-2 mt-auto">
                Register
              </Button>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;                                                     