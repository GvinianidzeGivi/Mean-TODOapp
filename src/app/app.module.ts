import { NavigationRoutingModule } from './modules/navigation-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { ErrorComponent } from './error/error.component';

import { TasksService } from './tasks.service';


import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/ka';

import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
registerLocaleData(ptBr)



@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    RegistrationComponent,
    ErrorComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule,
    NavigationRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ka-GE' },
    TasksService, 
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
