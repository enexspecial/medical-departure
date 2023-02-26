import { Component } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent {

  response:Response[] = []

  constructor( private _appService:AppService){

  }


  ngOnInit(){

    // console.log("okay to test",this._appService.getData)
    this._appService.getData().subscribe((res:any)=>{
      this.response = res;
    })

  }


  ngOnDestroy(){
   
  }

}



export interface Response{
  id:Number;
  userId:Number;
  title:String;
  body:String;
}
