import s from './style.module.sass';
import { useState } from 'react';

import MyButton from '../UI/MyButton';
import StudentsList from '../StudentsList';
import PopUpForm from '../PopUpForm';

export default function SubjectTab({subject}){
  const [modalState, setModalState] = useState(false);

  const handleSwitch = (prevState) => {
    setModalState(!prevState)
  };

  return(
    <>
      <PopUpForm
        state={modalState}
        switchFunc={handleSwitch}
        subject={subject}
      />
      <div className={s.bodyContainer}>
        <div>
          <h1>{subject}</h1>
          <MyButton 
            formBtn={true}
            onClick={() => handleSwitch()}
          >
            Add new student
          </MyButton>
        </div>
        <StudentsList subject={subject}/>
      </div>
    </>
  )
}