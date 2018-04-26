import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { TasksService } from './tasks.service';
import { TasksListComponent } from './tasks-list/tasks-list.component';


import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/ka';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ka-GE' },
    TasksService, 
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
