import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from "./components/contents/contents.component";
import { AddPostComponent } from "./components/add-post/add-post.component";

const routes: Routes = [
  {path:'', redirectTo:"posts", pathMatch:"full"},
  {path:'posts', component:ContentsComponent},
  {path:'add-post', component:AddPostComponent},
  {path:'edit-post/:id', component:AddPostComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
