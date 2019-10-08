import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Oda } from '../models/Oda';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { debug } from 'util';
@Injectable({
  providedIn: 'root'
})
export class OdaService {

constructor(private httpClient:HttpClient, private router:Router, private alertify:AlertifyService) { }
  path="http://localhost:50118/api/";
  
  getOdalar():Observable<Oda[]>{
    return this.httpClient.get<Oda[]>(this.path+"oda/odalar");
  }
  
  getOdaById(odaId:number):Observable<Oda>
  {
    return this.httpClient.get<Oda>(this.path+"oda/getir/"+odaId);
  }

  addOda(oda:Oda){
    debugger;
    this.httpClient.post(this.path+'oda/ekle',oda).subscribe(data=>{
        this.router.navigateByUrl('/odaDetay/'+data["id"]);
    });
    this.alertify.success("Oda Başarıyla Eklendi."); 
  }
  deleteOda(id:number){
    try {
      return this.httpClient.delete(this.path+'oda/sil/'+id);
    } catch (error) {
      debugger;
     return error;
    }
    
  }













  //fotoğrağlar ayrı olarak gelebilir.


}


