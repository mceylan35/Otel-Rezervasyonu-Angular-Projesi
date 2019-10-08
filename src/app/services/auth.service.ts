import { Injectable } from "@angular/core";
import { Kullanici } from "../models/Kullanici";
import { LoginUser } from "../models/loginUser";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { JwtHelper, tokenNotExpired } from "angular2-jwt";
import { Router } from "@angular/router";
import { AlertifyService } from "./alertify.service";
import { RegisterUser } from '../models/registerUser';
import { RezervasyonlarimService } from './rezervasyonlarim.service';
import { debug } from 'util';
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService,
   
  ) {}
  path = "http://localhost:50118/api/kullanici/";
  userToken: any;
  decodedToken: any; //çözümlenmiş token
  jwtHelper: JwtHelper = new JwtHelper();
  TOKEN_KEY = "token";
  static guserid:number;
  login(loginUser: LoginUser) {
    debugger;
    console.log(this.userToken);
    let headers = new HttpHeaders();
    
    
    headers = headers.append("Content-Type", "application/json");
    this.httpClient.post(this.path + "login", loginUser, { headers: headers })
    .subscribe(data => {
     
      this.saveToken(data);
    
      this.userToken = data;
      this.decodedToken = this.jwtHelper.decodeToken(data.toString());

    AuthService.guserid=this.decodedToken.nameid;
      this.alertifyService.success("Sisteme giriş yapıldı");
      this.router.navigateByUrl("/oda");
    });
}
  userIdDondur(){
    
    return this.decodedToken.nameid;
    debugger;
  }


  register(registerUser: RegisterUser) {
    var headers=new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
  
    return fetch(this.path+'register',{
      method:'Post',
      mode:'cors',
      credentials:'include',
      redirect:'follow',
      headers:headers,
      body:JSON.stringify(registerUser),
    }).then(resp=>{}).catch(err=>{})

  }

  saveToken(token) {
    
    localStorage.setItem(this.TOKEN_KEY, token);
    //locale token set ediyor
  }

 

  logOut(){
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem("userId");
    this.alertifyService.warning("Sistemden çıkış yapılıyor.");
  }
  logggedIn(){
    return tokenNotExpired(this.TOKEN_KEY);
  }

  get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUserId(){ 
    return this.jwtHelper.decodeToken(this.token).nameid;
  }

}
