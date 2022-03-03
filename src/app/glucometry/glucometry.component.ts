import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-glucometry',
  templateUrl: './glucometry.component.html',
  styleUrls: ['./glucometry.component.css']
})
export class GlucometryComponent implements OnInit {
  glucomteryForm=new FormGroup({
    fasting:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
    post:new FormControl("",[Validators.required,Validators.maxLength(30),Validators.minLength(7),]),
    gly:new FormControl("",[Validators.required,Validators.minLength(7),Validators.maxLength(12)]),
    calcium:new FormControl("",[Validators.required,Validators.minLength(7),Validators.maxLength(12)]),
  })
  get fasting(){
    return this.glucomteryForm.get('fasting')
  }
get post(){
  return this.glucomteryForm.get('post')
}
get gly(){
  return this.glucomteryForm.get('gly')
}
get calcium(){
  return this.glucomteryForm.get('calcium')
}
Submit(){
  console.log(this.glucomteryForm.value);
  localStorage.setItem("fasting", this.glucomteryForm.value.fasting)
  localStorage.setItem("post", this.glucomteryForm.value.post)
  localStorage.setItem("gly", this.glucomteryForm.value.gly)
  localStorage.setItem("calcium", this.glucomteryForm.value.calcium)
  
  if(this.glucomteryForm.value.fasting && this.glucomteryForm.value.post &&this.glucomteryForm.value.gly&&this.glucomteryForm.value.calcium){
    alert('add details successfully')
    this.router.navigate(['glucometryreport'])
  }else{
    alert('please enter valid credentials')
  }
  
}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
