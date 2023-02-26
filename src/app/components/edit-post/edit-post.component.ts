import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import {  FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {



editForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
})  

editForms = {
  title:"",
  body:""
}

constructor(private _activatedRoute: ActivatedRoute, private _appService:AppService){ }

  ngOnInit(){ 
     
  }


  onSubmit():void{

  }
 
  

  // how to bind data in angular with reactive form?



}
