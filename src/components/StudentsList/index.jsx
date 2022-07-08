import s from './style.module.sass';
import { observer } from "mobx-react-lite";

import students from '../../store/Students';
import StudentItem from '../StudentItem';

export default observer(function StudentsList({subject}){
  return(
    <ul className={s.studentList}>
      {students.students[subject].map(item => {
        return(
          <li key={item.id}>
            <StudentItem 
              name={item.name} 
              score={item.score} 
              level={item.level}
            />
          </li>
        )
      })}
    </ul>
  )
})