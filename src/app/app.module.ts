import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from "@angular/common/http"; //http operasyonları gerçekleştirecek modül
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {AlertifyService} from './services/alertify.service'
import { Browser } from "protractor";
import { OtelComponent } from "./otel/otel.component";
import { OdaComponent } from "./oda/oda.component";
import { from } from "rxjs";
import { OdaDetayComponent } from "./oda/oda-detay/oda-detay.component";
import { OdaAddComponent } from "./oda/oda-add/oda-add.component";
import { RegisterComponent } from './register/register.component';
import { OdaFilterPipe } from './oda/oda-filter.pipe';
import {NgbModule, NgbPagination, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { RezervasyonComponent } from './rezervasyon/rezervasyon.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { NgbdDatepickerPopup } from "./components/datepicker-popup/datepicker-popup.component";
import { RezervasyonlarimComponent } from './rezervasyonlarim/rezervasyonlarim.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PhotoComponent } from './photo/photo.component';
import {FileUploadModule} from 'ng2-file-upload';
import { OdaOperationComponent } from './oda/oda-operation/oda-operation.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      OtelComponent,
      OdaComponent,
      OdaDetayComponent,
      OdaAddComponent,
      RegisterComponent,
      OdaFilterPipe,
      RezervasyonComponent,
      NgbdDatepickerPopup,
      RezervasyonlarimComponent,
      PhotoComponent,
      OdaOperationComponent
   ],
   imports: [
      //hazırmodülleriprojeiçindekullanmakiçinyazılır.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nBrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      ReactiveFormsModule,
      NgbModule,
      NgbPaginationModule,
      NgbAlertModule,
      BrowserModule,
      BsDatepickerModule.forRoot(),
      NgxEditorModule,
      AngularEditorModule,
      FileUploadModule
   ],
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
      //hangicomponenetseniisterseçalış
   ]
})
export class AppModule {}
