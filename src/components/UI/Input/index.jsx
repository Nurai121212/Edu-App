import React from "react";
import s from  './style.module.sass'

export const Input = React.forwardRef((
  {
    error, 
    inputname, 
    type ='text', 
    ...rest
  }, ref) => {
  return (
    <div className={s.myInput}>
      <input 
        type={type} 
        ref={ref} 
        {...rest} 
        placeholder={inputname}
        autoComplete={inputname}
      />
      {error && (<span>{error}</span>)}
    </div>
  )
})