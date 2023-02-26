import { Component } from '@angular/core';
import { AppService } from "../../app.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent {

  response:Response[] = []

  constructor( 
    private _appService:AppService,
    public _router:Router
    
    ){

  }


  ngOnInit(){

    this._appService.getData().subscribe((res:any)=>{
      this.response = res;
    })

  }


  ngOnDestroy():void{
   
  }

  addPost():void{
    this._router.navigateByUrl("/add-post");
  }

  editPost(res:any):void{
    this._router.navigate(["edit-post", res.id]);
  }

  deletePost(res:any):void{
    
  }

}



export interface Response{
  id:Number;
  userId:Number;
  title:String;
  body:String;
}
