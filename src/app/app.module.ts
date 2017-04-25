import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ContactListComponent } from './contact-list.component';
import {ContactItemComponent} from './contact-item.component';
import {EditItemComponent} from './edit-item.component';
import {EditPageComponent} from './edit-page.component';

import {ContactsService} from './contacts.service';

import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactItemComponent,
    EditItemComponent,
    EditPageComponent
  ],
  imports: [
    routing,

    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
