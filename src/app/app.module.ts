import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import form module
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
// import app service
import { AppService } from "./app.service";
// import http 
import { HttpClient, HttpClientModule } from "@angular/common/http";
// import shared module
import { SharedModule } from './shared/shared.module';
import { ContentsComponent } from './components/contents/contents.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    AddPostComponent,
    EditPostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    AppService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
