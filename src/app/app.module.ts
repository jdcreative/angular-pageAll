import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//http client
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
//Modulo de formularios reactivos
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Interceptor
import { SSTAuthInterceptorService } from './Interceptor/sst-auth-interceptor.service'

//Directive
import { CompareValidatorDirective } from './shared/compare-validator.directive';

//Spinner
import { NgxSpinnerModule } from 'ngx-spinner';

//upload

import { FileSelectDirective } from 'ng2-file-upload';

//Componentes Page
import {LoginComponent} from './Component/modals/login/login.component'
import {SingInComponent} from './Component/modals/sing-in/sing-in.component'
import { HomeComponent } from './Component/PageZionSSt/home/home.component';
import { ZionSSTComponent } from './Component/PageZionSST/zion-sst/zion-sst.component';
import { MenuComponent } from './Component/PageZionSSt/menu/menu.component';
import { WeComponent } from './Component/PageZionSSt/we/we.component';
import { FrequentQuestionsComponent } from './Component/PageZionSSt/frequent-questions/frequent-questions.component';
import { ContactUsComponent } from './Component/PageZionSSt/contact-us/contact-us.component';
import { ConfirmDialogComponent } from './Component/PageZionSST/confirm-dialog/confirm-dialog.component'
import { ConfirmDialogService } from './service/confirm-dialog.service';
import { MenuLoginComponent } from './Component/PageZionSST/menu-login/menu-login.component';
import { FooterComponent } from './Component/PageZionSST/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZionSSTComponent,
    MenuComponent,
    WeComponent,
    FrequentQuestionsComponent,
    ContactUsComponent,
    CompareValidatorDirective,
    ConfirmDialogComponent,
    MenuLoginComponent,
    LoginComponent,
    SingInComponent,
    FooterComponent,
    FileSelectDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BootstrapModalModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SSTAuthInterceptorService,
    multi: true
  },
    ConfirmDialogService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent,
  ]
})
export class AppModule { }
