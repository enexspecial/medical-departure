import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import app service
import { AppService } from "./app.service";
// import http 
import { HttpClient, HttpClientModule } from "@angular/common/http";
// import shared module
import { SharedModule } from './shared/shared.module';
import { ContentsComponent } from './components/contents/contents.component';
import { AddPostComponent } from './components/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
