import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { from } from "rxjs";
import { OdaService } from "src/app/services/oda.service";
import { Oda } from "src/app/models/Oda";
import { NgForm, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { RezervasyonService } from 'src/app/services/rezervasyon.service';
import { OdaRezervasyon } from 'src/app/models/OdaRezervasyon';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-oda-detay",
  templateUrl: "./oda-detay.component.html",
  styleUrls: ["./oda-detay.component.css"],
  providers: [OdaService]
})
export class OdaDetayComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private odaService: OdaService,
    private rezervasyonService:RezervasyonService,
    private fb:FormBuilder,
    private authService:AuthService
  ) {}
  odarezervasyon:OdaRezervasyon;
  rezervasyonForm:FormGroup;
  model:OdaRezervasyon=new OdaRezervasyon();
  oda: Oda;

  ngOnInit() {
    this.createRezervasyonForm();
    this.activatedRoute.params.subscribe(params => {
      this.getOdaById(params["odaId"]);
    });
  }
  getOdaById(odaId: number) {
    this.odaService.getOdaById(odaId).subscribe(data => {
      this.oda = data;
    });
  }

  createRezervasyonForm(){
    this.rezervasyonForm=this.fb.group({
      girisTarihi:["",Validators.required],
      cikisTarihi:["",Validators.required]
    })
  }
  
    
  add(form:NgForm){
    debugger;
    this.model.odaId=this.oda.id;
    this.model.toplamFiyat=this.oda.ucret;
    this.model.kullaniciId=this.authService.getCurrentUserId();
    
    this.rezervasyonService.odaRezerve(this.model);
    
  }
  
    rezervasyon(){
      debugger;
      this.rezervasyonService.odaRezerve(this.odarezervasyon);
    }

}
