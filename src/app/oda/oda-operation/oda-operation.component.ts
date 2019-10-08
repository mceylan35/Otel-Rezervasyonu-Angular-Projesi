import { Component, OnInit } from '@angular/core';
import { OdaService } from 'src/app/services/oda.service';
import { Oda } from 'src/app/models/Oda';
import { runInThisContext } from 'vm';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-oda-operation',
  templateUrl: './oda-operation.component.html',
  styleUrls: ['./oda-operation.component.css'],
  providers:[OdaService]
})
export class OdaOperationComponent implements OnInit {
  constructor(private odaService:OdaService, private alertifyService:AlertifyService) { }
odalar:Oda[];
  ngOnInit() {
    this.odaService.getOdalar().subscribe(data=>{
      this.odalar=data;
    })
  }
  odaSil(id:number)
  {
    debugger;
    try {
      this.odaService.deleteOda(id).subscribe(res=>{
        this.odaService.getOdalar().subscribe(data=>{
          this.odalar=data;
          this.alertifyService.warning("Oda Silindi");
        },
        error=>{this.alertifyService.error("Oda Silinemedi");} )    });
      
    } catch (error) {
      debugger;
      this.alertifyService.error("Oda Silinemedi");
    }
   }
 

  
    


}
