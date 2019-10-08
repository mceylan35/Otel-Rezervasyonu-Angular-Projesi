import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { OdaRezervasyon } from '../models/OdaRezervasyon';

@Injectable({
  providedIn: 'root'
})
export class RezervasyonService {

constructor(private httpClient:HttpClient,private router:Router,private alertifyService:AlertifyService) { }
path="http://localhost:50118/api/";
odaRezerve(rezervasyon:OdaRezervasyon){
  debugger;
  this.httpClient.post(this.path+'rezervasyon/ekle',rezervasyon).subscribe(data=>{
    this.router.navigateByUrl("/rezervasyonlarim");
  });
  this.alertifyService.success("oda rezerve edildi.");
  
}

}
