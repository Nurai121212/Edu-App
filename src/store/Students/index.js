import { makeAutoObservable, runInAction } from "mobx";
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1717/students'
});

class Students{
  loading = true;
  students = {};

  constructor(){
    makeAutoObservable(this)
  }

  async setStudents(subject){
    if(`${subject}` in this.students){return false};

    try{
      const res = await instance.get(`/${subject}`);
      
      runInAction(() => {
        this.students[subject] = res.data
      })
    }catch(e){
      console.log(e);
    }finally{
      runInAction(() => {
        this.loading = false
      })
    }
  }

  setLoading(){
    this.loading = true;
  }
}

export default new Students();