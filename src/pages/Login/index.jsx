import s from './style.module.sass';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import users from '../../store/Users';

import Form from '../../components/UI/Form';
import { Input }from '../../components/UI/Input';
import MyButton from '../../components/UI/MyButton';
import { useState } from 'react';

export default observer(function Login(){
  const {
    register, 
    setError, 
    handleSubmit, 
    formState : {
      errors
    }} = useForm({ mode: "onBlur" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async(data) => {
    setLoading(true);

    const res = await users.loginUser(data);
    
    if(res.status !== 200){
      setError('password', {
        type: 'custom',
        message: 'Error. Try again'
      })
    };

    setLoading(false)
  };

  return(
    <div className={s.bodyContainer}>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          error={errors?.username?.message}
          inputname = 'username'
          {...register("username", {
            required: 'enter username',
            minLength: {
              value: 5,
              message: "username should has more than 5 letters"
            },
            pattern:{
              value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/g,
              message: 'doesnt validate'
            }
          })}
        />
        <Input
          error = {errors?.password?.message}
          inputname = 'password'
          type = 'password'
          {...register('password', {
            required: 'enter password',
            minLength:{
              value: 8,
              message: 'password should has more than 8 symbols.'
            },
            pattern: {
              value: /[A-Za-z0-9]+/g,
              message: 'password should has only letters and numbers'
            }
          })}
        />
        <MyButton
          formBtn={true}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Log in'}
        </MyButton>
      </Form>
    </div>
  )
})