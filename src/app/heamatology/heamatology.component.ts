import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heamatology',
  templateUrl: './heamatology.component.html',
  styleUrls: ['./heamatology.component.css']
})
export class HeamatologyComponent implements OnInit {

  constructor(private router:Router) { }
  haematologyForm=new FormGroup({
    fasting:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
    post:new FormControl("",[Validators.required,Validators.maxLength(30),Validators.minLength(7),]),
    gly:new FormControl("",[Validators.required,Validators.minLength(7),Validators.maxLength(12)]),
    calcium:new FormControl("",[Validators.required,Validators.minLength(7),Validators.maxLength(12)]),
  })
  get fasting(){
    return this.haematologyForm.get('fasting')
  }
get post(){
  return this.haematologyForm.get('post')
}
get gly(){
  return this.haematologyForm.get('gly')
}
get calcium(){
  return this.haematologyForm.get('calcium')
}
Submit(){
  console.log(this. haematologyForm.value);
  localStorage.setItem("fasting", this.haematologyForm.value.fasting)
  localStorage.setItem("post", this.haematologyForm.value.post)
  localStorage.setItem("gly", this.haematologyForm.value.gly)
  localStorage.setItem("calcium", this.haematologyForm.value.calcium)
  if(this.haematologyForm.value.fasting && this.haematologyForm.value.post &&this.haematologyForm.value.gly&&this.haematologyForm.value.calcium){
    alert('add details successfully')
    this.router.navigate(['haemetologyreport'])
  }else{
    alert('please enter valid credentials')
  }
  
}

  ngOnInit(): void {
  }

}
