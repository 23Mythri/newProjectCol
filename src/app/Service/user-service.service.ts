import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  postDetails(data:any){
    return this.http.post<any>("http://localhost:4000/users/register",data)
  }

  postDetail(data:any){
    return this.http.post<any>("http://localhost:4000/users/login",data)
  }
  postadmindetails(data:any){
   return this.http.post<any>("http://localhost:4000/users/login",data)
  }
  
  
  getData(){
    return this.http.get("http://localhost:4000/users/users")
  }
  updateUser(login:any){
    return this.http.put<any>("http://localhost:4000/users/getUser/",login)
  }

  getViewSample(){
    return this.http.get<any>("http://localhost:4000/users/viewSample")
  }
}
