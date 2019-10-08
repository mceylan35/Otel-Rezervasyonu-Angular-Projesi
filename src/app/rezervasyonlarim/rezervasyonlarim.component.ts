import { Component, OnInit } from '@angular/core';
import { RezervasyonlarimService } from '../services/rezervasyonlarim.service';
import { Rezervasyon } from '../models/Rezervasyon';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-rezervasyonlarim',
  templateUrl: './rezervasyonlarim.component.html',
  styleUrls: ['./rezervasyonlarim.component.css']
})
export class RezervasyonlarimComponent implements OnInit {

  constructor(private rezervasyonlarim:RezervasyonlarimService) { }
  rezervasyonlar:Rezervasyon[];
  ngOnInit() {
    this.rezervasyonlarim.getRezervasyonlarim().subscribe(data=>{
      debugger;
      this.rezervasyonlar=data;
    })
  }

}
