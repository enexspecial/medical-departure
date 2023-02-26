import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    EditPostComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
