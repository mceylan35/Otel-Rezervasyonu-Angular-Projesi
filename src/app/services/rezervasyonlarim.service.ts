import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { Observable } from 'rxjs';
import { Rezervasyon } from '../models/Rezervasyon';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RezervasyonlarimService {

constructor(private httpClient:HttpClient,private router:Router,private alertifyService:AlertifyService, private authservis:AuthService) { }
path="http://localhost:50118/api/";

token:any;
getRezervasyonlarim():Observable<Rezervasyon[]>{
  debugger;
  this.token=this.authservis.decodedToken;
  return this.httpClient.get<Rezervasyon[]>(this.path+"rezervasyon/rezervasyonlar/"+this.authservis.getCurrentUserId());
  
}

}
