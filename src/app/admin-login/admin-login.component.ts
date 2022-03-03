import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { UserServiceService } from '../Service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  constructor(private router:Router,private user:UserServiceService) { }
  logForm=new FormGroup({
            uemail:new FormControl("",[Validators.required,Validators.email]),
            upass:new FormControl("",[Validators.required])
  })
        get uemail(){
          return this.logForm.get('uemail')
        }
        get upass(){
          return this.logForm.get('upass')
        }
 
    res:any
    Submit(){
      console.log(this.logForm.value);
      this.user.postadmindetails(this.logForm.value).subscribe(data=>{
        console.log(this.res=data);
        if(this.res.data.role === 'admin'){
          alert("successfully logged in as admin")
          this.router.navigate(['users'])
        }else{
          alert("successfully logged in as user")
          this.router.navigate(['userdetails'])
        }

      }) 
    }
 
  ngOnInit(): void {
  }

}
