import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {



  constructor(
    public _http:HttpClient
  ) { 

  }



  // 

  getData(){
    return this._http.get("https://jsonplaceholder.typicode.com/posts")
           .pipe(map((data)=>{
              return data
           }),
           catchError((err)=>{
              return throwError("Something went wrong")
           })
           );  
  }


  postData(){

  }


  updateData(){

  }

  deleteData(){

  }





}
