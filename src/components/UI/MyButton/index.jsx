import s from  './style.module.sass';
import classNames from 'classnames';

export default function MyButton({children, currentClass, formBtn, ...props}){
  const btnClass = classNames(
    s.myButton, {
      [s.active] : currentClass, 
      [s.formBtn] : formBtn
    });

  return(
    <button 
      {...props} 
      className={btnClass}
    >
      {children}
    </button>
  )
}