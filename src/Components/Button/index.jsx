
const Button = ({children, handleClick, extraStyles = ""}) => {
    
    return (
        <button onClick={handleClick} className={`px-[8px] py-[4px] border-1 border-slate-500 rounded-md cursor-pointer shadow-sm hover:shadow-md ${extraStyles}`}>
            {children}  
        </button>
    )
}

export default Button;               