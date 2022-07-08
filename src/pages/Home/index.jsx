import s from './style.module.sass';
import ClassNames from 'classnames';
import { observer } from "mobx-react-lite";
import { useEffect, useCallback, useState } from "react";

import students from "../../store/Students";
import SideNav from "../../components/SideNav";
import SubjectTab from '../../components/SubjectTab';


export default observer(function Home(){
  const [current_sub, setCurrent_sub] = useState('');
  const defaultSubjects = ['math', 'physics', 'chemistry', 'biology'];

  const setCurrent = useCallback((sub) => {
    setCurrent_sub(sub)

    if(!students.students[sub]){students.setLoading()}

    students.setStudents(sub)
  }, []);

  useEffect(() => {
    setCurrent('math')
  }, [setCurrent])

  return(
    <>
      <SideNav setFunc={setCurrent} current={current_sub} items={defaultSubjects}/>
      
      {students.loading ? (
        <h1 className={ClassNames(s.title, s.loading)}>Student list is loading...</h1>
      ) : (
        students.students[current_sub] ? (
          <SubjectTab subject={current_sub}/>
        ) : (
          <h1 className={ClassNames(s.title, s.error)}>Internal Server Error 500. Try again</h1>
        )
      )}
    </>
  )
})