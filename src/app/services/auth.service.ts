import { Injectable } from '@angular/core';
import { LoginModel } from './../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from './../models/tokenModel';
import { SingleResponseModel } from '../models/singleResnponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44371/api/auth'

  constructor(private httpClient:HttpClient) { }

  login(user:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"/login", user)
  }

  isAuth(){
    if(localStorage.getItem("token")){
      return true;
    }
    else
      return false;
  }
}
