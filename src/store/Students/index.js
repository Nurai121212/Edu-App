import { makeAutoObservable, runInAction } from "mobx";
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1717/students'
});

class Students{
  loading = false;
  students = {};

  constructor(){
    makeAutoObservable(this)
  }

  async getData(subject){
    try{
      runInAction(() => {
        this.loading = true;
      });
  
      const res = await instance.get(`/${subject}`);

      if(res.data){
        runInAction(() => {
          this.students[subject] = res.data
        })
      }
    }catch(e){
      console.log(e);
    }finally{
      runInAction(() => {
        this.loading = false
      })
    }
  }

  setStudents(subject){
    if(`${subject}` in this.students){return false};

    this.getData(subject)
  }

  async addStudent(data, subject){
    try{
      const res = await instance.post(`/${subject}/add`, data)
      if(res.status === 200){
        this.getData(subject)
      }
    }catch{
      return false
    }
  }
}

export default new Students();