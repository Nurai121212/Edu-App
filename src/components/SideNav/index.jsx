import logo from '../../assets/app_logo.png';
import s from './style.module.sass';

import MyButton from '../UI/MyButton';

export default function SideNav({setFunc, current, items}){
  return(
    <div className={s.sideNav}>
      <div className={s.logo}>
        <img src={logo} alt="app logo"/>
      </div>
      <ul className={s.navLinks}>
        {items.map((subject, index)=> {
          return(
            <li key={index}>
              <MyButton 
                onClick={() => setFunc(subject)}
                currentClass={current === subject}
              >
                {subject}
              </MyButton>
            </li>)
        })}
      </ul>
    </div>
  )
}