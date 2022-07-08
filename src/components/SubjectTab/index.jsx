import s from './style.module.sass';

import MyButton from '../UI/MyButton';
import StudentsList from '../StudentsList';

export default function SubjectTab({subject}){
  return(
    <div className={s.bodyContainer}>
      <div>
        <h1>{subject}</h1>
        <MyButton>Add new student</MyButton>
      </div>
      <StudentsList subject={subject}/>
    </div>
  )
}