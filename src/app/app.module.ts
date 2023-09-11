import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { ToolbarComponent } from './commom/componentes/toolbar/toolbar.component';
import { MaterialModule } from './shared/material/material.module';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
// import { LoginComponent } from './commom/auth/components/login/login.component';
// import { CadastroComponent } from './commom/auth/components/cadastro/cadastro.component';


registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    // LoginComponent,
    // CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-PT'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
