import { makeAutoObservable, runInAction } from "mobx";
import Cookies from "js-cookie";
import apiRequest from "../../apiRequest";

class User{
  user = null

  constructor(){
    makeAutoObservable(this)
  }

  async loginUser(data){
    try{
      const res = await apiRequest.logIn(data);

      if(res.data){
        Cookies.set('my_token', res.data.token);

        runInAction(() => {
          this.user = res.data;
        })
      }
    }catch(e){
      console.log(e);
    }
  }

  async getProfile(token){
    try{
      const res = await apiRequest.getMe(token);

      if(res){
        runInAction(() => {
          this.user = res
        })
      }
    }catch(e){
      return e 
    }
  }

  logOut(){
    Cookies.remove('my_token');

    this.user = null;
  }
}

export default new User();