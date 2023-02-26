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

  // set editData(data: any){
  //   localStorage.setItem("edit-data",JSON.stringify(data))
  // }

  // get editData(){
  //   return localStorage.getItem("edit-data")
  // }



  // 

  getData():Observable<any>{
    return this._http.get("https://jsonplaceholder.typicode.com/posts")
           .pipe(map((data)=>{
              return data
           }),
           catchError((err)=>{
              return throwError(err)
           })
           );  
  }



  postData(data:any){
    return this._http.post("https://jsonplaceholder.typicode.com/posts", data)
  }


  updateData(data:any, id:Number){
      return this._http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
  }

  deleteData(id:Number){
      return this._http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }





}
