import React from 'react';

const InputField = ({className, label, type, id, placeholder}) => {
  return (
    <div className={`inputField w-[508px] flex flex-col gap-2.5 ${className}`}>
                <label className='text-base text-[#262626] font-bold ' htmlFor={id}>{label}</label>
                <input className='placeholder:text-sm placeholder:text-[#767676] border-b border-[#F0F0F0] pb-4 outline-none' type={type} id={id} placeholder={placeholder}/>
            </div>
  );
}

export default InputField;
