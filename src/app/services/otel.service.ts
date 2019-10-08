import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { Observable } from 'rxjs';
import { Otel } from '../models/Otel';

@Injectable({
  providedIn: 'root'
})
export class OtelService {

constructor(private httpClient:HttpClient,private router:Router, private alertify:AlertifyService) { }
path="http://localhost:50118/api/";
getOteller():Observable<Otel[]>{
  return this.httpClient.get<Otel[]>(this.path+"otel/oteller");
}

}






 
  