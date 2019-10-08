import { Component, OnInit } from '@angular/core';
import { Oda } from '../models/Oda';
import { OdaService } from '../services/oda.service';

@Component({
  selector: 'app-oda',
  templateUrl: './oda.component.html',
  styleUrls: ['./oda.component.css'],
  providers:[OdaService] //depency injection için  yani bu component kullanoldığında odaservice instance oluşacaktır.
})
export class OdaComponent implements OnInit {

  constructor(private odaService:OdaService) { }
  odalar:Oda[];
  filterText:string;
  ngOnInit() {
    this.odaService.getOdalar().subscribe(data=>{ //observable olduğumuz için subscribe olmamız gerekir.
      this.odalar=data; 
      this.filterText="";
    });
  }

}
