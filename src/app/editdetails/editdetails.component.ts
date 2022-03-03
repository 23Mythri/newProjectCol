import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {

  constructor(private rout: ActivatedRoute, private servs: UserServiceService,private router:Router) { }
  result: any
  SelectedUser: any
  val: any
  ngOnInit(): void {

    let id = this.rout.snapshot.params['_id']
    console.log(id);
    this.servs.getData().subscribe((data) => {
      this.result = data
      this.result = this.result.data.userData
      for (let res of this.result) {
        if (res._id === id) {
          this.SelectedUser = res
          console.log(this.SelectedUser.uname);
          
        }
      }
    })
  }
  getUser(form: NgForm) {
  console.log(form.value);

  let {uname,uemail}=form.value
    this.servs.updateUser({_id:this.SelectedUser._id,uname:uname,uemail:uemail}).subscribe((res) => {
      console.log(res);
    })
    this.router.navigate(["users"])
  

  }
 

}
