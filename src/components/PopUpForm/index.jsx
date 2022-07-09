import s from './style.module.sass';
import ClassNames from 'classnames'
import { useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'

import students from '../../store/Students';
import Form from '../UI/Form';
import { Input } from '../UI/Input';
import { useEffect, useState  } from 'react';
import MyButton from '../UI/MyButton';

export default observer(function PopUpForm({state, switchFunc,  subject}){
  const [loading, setLoading] = useState(false);
  const modalClass = ClassNames(s.modal, {[s.active]: state});

  const {
    register, 
    setError, 
    handleSubmit, 
    formState : {
      errors
  }} = useForm({ mode: "onBlur" });

  useEffect(() => {
    if(state){
      document.body.style.overflow='hidden';
    }else{
      document.body.style.overflow='';
    }
  }, [state]);

  const submitStudent = async(data) => {
    setLoading(true);

    const result = {
      name: data.fullname,
      score: parseInt(data.score),
      level: data.level
    };

    const res = await students.addStudent(result, subject);
    if(!res){
      setError('score', {
        type: 'custom',
        message: 'Internal Server Error 500. Try again'
      })
    }

    setLoading(false)
  };
  
  return(
    <div className={modalClass} onClick={() => switchFunc(state)}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <h1>Add new student</h1>
        <Form onSubmit={handleSubmit(submitStudent)}>
          <Input
            error={errors?.fullname?.message}
            inputname = 'fullname'
            {...register("fullname", {
              required: 'enter full name',
              minLength: {
                value: 5,
                message: "text should has more than 5 letters"
              },
              pattern:{
                value: /^[a-zA-Z\s]*$/g,
                message: 'doesnt validate'
              }
            })}
          />
          <Input
            error={errors?.level?.message}
            inputname = 'level'
            {...register("level", {
              required: 'enter level',
              maxLength: {
                value: 2,
                message: "enter level"
              },
              pattern:{
                value: /[A-Za-z0-9]/g,
                message: 'doesnt validate'
              }
            })}
          />
          <Input
            error={errors?.score?.message}
            inputname = 'score'
            {...register("score", {
              required: 'enter score',
              pattern:{
                value: /[0-9]/g,
                message: 'doesnt validate'
              }
            })}
          />
          <MyButton 
            formBtn={true}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Add'}
          </MyButton>
        </Form>
      </div>
    </div>
  )
})