import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from "./components/contents/contents.component";
import { AddPostComponent } from "./components/add-post/add-post.component";
import { EditPostComponent } from "./components/edit-post/edit-post.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  {path:'', redirectTo:"posts", pathMatch:"full"},
  {path:'posts', component:ContentsComponent},
  {path:'add-post', component:AddPostComponent},
  {path:'edit-post/:id', component:EditPostComponent},
  {path:'**', component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
