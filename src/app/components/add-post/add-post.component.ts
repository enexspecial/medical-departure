import { Component } from '@angular/core';
import { AppService } from "../../app.service"; 
import {  FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  postForm = new FormGroup({
    userId: new FormControl(1),
    title: new FormControl(''),
    body: new FormControl('')
  })

  constructor(private _appService:AppService, private _router:Router){ }


  onSubmit():void{
    this._appService.postData(this.postForm.value).subscribe((res:any)=>{
      if(res){
        alert("successful");
        this._router.navigateByUrl("/")
      }

    },(err)=>alert(err))
  }

}



export interface Post{
  userId?:Number;
  title:String;
  body:String;
}
