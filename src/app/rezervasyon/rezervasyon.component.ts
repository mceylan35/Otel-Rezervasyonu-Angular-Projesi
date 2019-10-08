import { Component, OnInit } from '@angular/core';
import { Rezervasyon } from '../models/Rezervasyon';
import { AuthService } from '../services/auth.service';
import { RezervasyonService } from '../services/rezervasyon.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { OdaRezervasyon } from '../models/OdaRezervasyon';

@Component({
  selector: 'app-rezervasyon',
  templateUrl: './rezervasyon.component.html',
  styleUrls: ['./rezervasyon.component.css']
})
export class RezervasyonComponent implements OnInit {

  constructor(private authService:AuthService,
     private rezervasyonService:RezervasyonService,
     private fb:FormBuilder) { }

  odarezervasyon:OdaRezervasyon;
  rezervasyonForm:FormGroup;
  model:OdaRezervasyon=new OdaRezervasyon();
  ngOnInit() {
    this.createRezervasyonForm();
  }

createRezervasyonForm(){
  this.rezervasyonForm=this.fb.group({
    girisTarihi:["",Validators.required],
    cikisTarihi:["",Validators.required]
  })
}

  
add(form:NgForm){
  debugger;
  this.rezervasyonService.odaRezerve(this.model);
}

  rezervasyon(){
    debugger;
    this.rezervasyonService.odaRezerve(this.odarezervasyon);
  }

}
