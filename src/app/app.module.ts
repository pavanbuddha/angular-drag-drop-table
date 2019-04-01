import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './../material-module';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import {NotFoundComponent} from './not-found/not-found.component';

import { UserService } from './user.service';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: WelcomeComponent },
      { path: "user/:id", component: ItemComponent },
      { path: "**", component: NotFoundComponent },
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ItemComponent,
    NotFoundComponent,

  ],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule { }
