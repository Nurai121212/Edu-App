import logo from '../../assets/app_logo.png';
import s from './style.module.sass';
import { observer } from 'mobx-react-lite';
import users from '../../store/Users';

import MyButton from '../UI/MyButton';

export default observer(function SideNav({setFunc, current, items}){
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
      <div className={s.navBottom}>
        <h1>
          You've logged as:
          <span>admin</span>
        </h1>
        <button onClick={() => users.logOut()}>Log out</button>
      </div>
    </div>
  )
})