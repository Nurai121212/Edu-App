import { makeAutoObservable, runInAction } from "mobx";
import apiRequest from "../../apiRequest";

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
  
      const res= await apiRequest.getStudents(subject);

      if(res.data){
        runInAction(() => {
          this.students[subject] = res.data
        })
      }
    }catch(e){
      console.error(e);
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
      const res = await apiRequest.addStudent(subject, data);

      if(res.status === 200){
        this.getData(subject)
      }
    }catch(e){
      return e
    }
  }
}

export default new Students();