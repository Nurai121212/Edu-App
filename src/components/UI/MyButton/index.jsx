import s from  './style.module.sass';
import classNames from 'classnames';

export default function MyButton({children, currentClass ,...props}){
  const btnClass = classNames(s.myButton, {[s.active] : currentClass});

  return(
    <button {...props} className={btnClass}>{children}</button>
  )
}