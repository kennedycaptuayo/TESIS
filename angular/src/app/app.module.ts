import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from './material/material.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';

import {AlertService} from './services/alert.service';

import {AppComponent} from './app.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AlertComponent} from './directives/alert/alert.component';
import {AppGlobals} from './app.globals';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AlertService,
    AppGlobals
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

