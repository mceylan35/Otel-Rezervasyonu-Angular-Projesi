import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

import { from } from 'rxjs';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {Oda} from '../models/Oda';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private alertifyService:AlertifyService, private authService:AuthService) { }

  oda:Oda[]=[];
  uploader:FileUploader;
  hasBaseDropZoneOver=false;
  baseUrl='http://localhost:50118/api/';
  currentMain:Oda;
  currentOda:any;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.currentOda=params["Id"]
    })
    this.initializeUploader();

  }
  initializeUploader(){
    this.uploader=new FileUploader({
      url:this.baseUrl+'odalar/'+this.currentOda+'ekle',
      authToken:'Bearer '+localStorage.getItem('token'),
      isHTML5:true,
      allowedFileType:['image'],
      autoUpload:false,
      removeAfterUpload:true,
      maxFileSize:10*1024*1024

    })
    this.uploader.onSuccessItem=(item,response,status,headers)=>{
if(response){
  const res:Oda=JSON.parse(response);
  const oda={
    id:res.id,
    odaNo:res.odaNo,
    odaDurumu:res.odaDurumu,
    ucret:res.ucret,
    kisiSayisi:res.kisiSayisi,
    aciklama:res.aciklama,
    resim:res.resim,
    otelId:res.otelId
  
  }
  this.oda.push(oda);
}
    }
  }

}
