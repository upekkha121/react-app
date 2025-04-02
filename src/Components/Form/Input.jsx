import React from 'react'

const Input = ({
    type = "text",
    label,
    placeholder = " ",
    containerStyle = "",
    value,
    name="",
    onchange,
}) => {
    return (
        <div className="flex flex-col ">

            {label && <label htmlFor="" className="mb-1 block text-amber-600">{label}</label>}

            <input
                onChange={onchange} 
                value={value}
                placeholder={placeholder}
                name={name}
                className={`w-full px-[12px] py-[8px] border-1 border-amber-500 rounded-md focus:border-amber-700 hover:border-amber-500 active:border-amber-700 focus:outline-0 ${containerStyle}`}
                type={type} />

        </div>
    )
}

export default Input;