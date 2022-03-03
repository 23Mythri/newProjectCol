import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/user-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private service:UserServiceService) { }

  regForm=new FormGroup({
    uname:new FormControl("",[Validators.required,Validators.maxLength(30),Validators.minLength(7),]),
    uemail:new FormControl("",[Validators.required,Validators.email]),
    upass:new FormControl("",[Validators.required,Validators.maxLength(30),Validators.minLength(7),]),
    role:new FormControl("",[Validators.required,Validators.maxLength(30),Validators.minLength(7),])
   
  })
  get uname(){
    return this.regForm.get('uname')
  }
  get uemail(){
    return this.regForm.get('uemail')
  }
  get upass(){
    return this.regForm.get('upass')
  }
  get role(){
    return this.regForm.get('role')
  }
 res:any

Submit(){
  console.log(this.regForm.value);
  if(this.regForm.value.uemail && this.regForm.value.upass && this.regForm.value.uname ){
   alert("successfully registered")
    this.router.navigate(['adminlogin'])
  }else{
    alert("please enter valid credentials")
  }
  this.service.postDetails(this.regForm.value).subscribe(val=>{
    console.log(this.res=val);
  })
   

  
}
 

  ngOnInit(): void {
  }

}
