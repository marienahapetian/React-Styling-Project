 export default function CustomInput({label, invalid, ...props}){
    let labelClasses = "block mb-2 font-bold tracking-wide ";
    let inputClasses = "w-full px-3 leading-tight border rounded py-2 ";

    if(invalid){
        labelClasses += "text-red-400";
        inputClasses += "text-red-500 bg-red-100 border-red-300";
    }
    else{
        labelClasses += "text-stone-400";
        inputClasses += "text-gray-700 bg-stone-300";
    }


    return <p>
        <label className={labelClasses}>{label}</label>
        <input className={inputClasses} {...props}/>
    </p>
}        