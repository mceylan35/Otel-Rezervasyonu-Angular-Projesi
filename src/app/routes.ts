import { OdaComponent } from "./oda/oda.component";
import { OtelComponent } from "./otel/otel.component";
import { Routes } from "@angular/router";
import { OdaDetayComponent } from "./oda/oda-detay/oda-detay.component";
import { OdaAddComponent } from './oda/oda-add/oda-add.component';
import { RegisterComponent } from './register/register.component';

import { RezervasyonComponent } from './rezervasyon/rezervasyon.component';
import { RezervasyonlarimComponent } from './rezervasyonlarim/rezervasyonlarim.component';
import { OdaOperationComponent } from './oda/oda-operation/oda-operation.component';

export const appRoutes: Routes = [
  { path: "oda", component: OdaComponent },
  {path:"oda-operation",component:OdaOperationComponent},
  {path: "register",component:RegisterComponent},
  {path:"odaAdd", component:OdaAddComponent},
  { path: "otel", component: OtelComponent },
  {path:"rezervasyon",component:RezervasyonComponent},
  {path:"rezervasyonlarim",component:RezervasyonlarimComponent},
  { path: "odaDetay/:odaId", component: OdaDetayComponent },
  { path: "**", redirectTo: "oda", pathMatch: "full" },


];
