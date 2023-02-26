import { Component } from '@angular/core';
import { AppService } from "../../app.service"; 

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  constructor(private _appService:AppService){ }


  onSubmit():void{
    
  }

}



export interface Post{
  userId:Number;
  title:String;
  body:String;
}
