import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

editID:any

editValue:Post ={
  userId:1,
  title:"",
  body:""
} 


constructor(private _activatedRoute: ActivatedRoute, private _appService:AppService, private _router:Router){ }

  ngOnInit(){ 
    this.editID = this._activatedRoute.snapshot.paramMap.get('id')  
    this.fetchData();   
  }


  fetchData(){

    this._appService.getData().subscribe((data:any)=>{
       if(data){
          data.map((obj:any)=>{
            if(obj.id == this.editID){
              this.editValue.title = obj.title;
              this.editValue.body = obj.body;
            }
        })
       }

    })
  }

  onSubmit():void{
    this._appService.updateData(this.editValue, this.editID).subscribe((res:any)=>{
      if(res){
        this.editValue.title = res.title;
        this.editValue.body = res.body;
        alert("Success");
        // this._router.navigateByUrl("/")
      }

    },(err)=>alert(err))
  }
 
  goBack():void{
    this._router.navigateByUrl("/")
  }
  




}



export interface Post{
  userId?:Number;
  title:String;
  body:String;
}
