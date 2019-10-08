import { Component, OnInit } from "@angular/core";
import { OdaService } from "src/app/services/oda.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormsModule
} from "@angular/forms";
import { Oda } from "src/app/models/Oda";
import { AlertifyService } from "src/app/services/alertify.service";
import { Router } from "@angular/router";
import { OtelService } from 'src/app/services/otel.service';
import { Otel } from 'src/app/models/Otel';
@Component({
  selector: "app-oda-add",
  templateUrl: "./oda-add.component.html",
  styleUrls: ["./oda-add.component.css"],
  providers: [OdaService,OtelService] //newleme
})
export class OdaAddComponent implements OnInit {
  constructor(
    private odaService: OdaService,
    private formBuilder: FormBuilder,
    private otelService:OtelService,
    private alertifyService:AlertifyService
  ) {}
  oda: Oda=new Oda();
  oteller:Otel[];
  odaAddForm: FormGroup;

  createOdaForm() {
    this.odaAddForm = this.formBuilder.group({
      aciklama: ["", Validators.required],
      odaNo: ["", Validators.required],
      odaDurumu: ["", Validators.required],
      ucret: ["", Validators.required],
      kisiSayisi: ["", Validators.required],
      resim: ["", Validators.required],
      otelId: ["", Validators.required]
    });
  }
  
  ngOnInit() {
    this.createOdaForm();
    this.otelService.getOteller().subscribe(data=>{
      this.oteller=data;
    });

  }

  add() {
   
    if (this.odaAddForm.valid) {
      this.oda = Object.assign({}, this.odaAddForm.value);
      //formdaki verileri oda nesnesine ata
      this.odaService.addOda(this.oda);
      //oda nesnesini service ye gönderiyoruz.
    }
  }
}
