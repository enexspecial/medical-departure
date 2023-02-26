import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {



  

  constructor(private _activatedRoute: ActivatedRoute, private _appService:AppService){ }

  ngOnInit(){ 
     
  }
 
  



}
