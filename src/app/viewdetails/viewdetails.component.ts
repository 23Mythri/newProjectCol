import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
   result:any
   constructor(private details:UserServiceService) { }
   uname:any;

  ngOnInit() {
    this.details.getViewSample().subscribe((val)=>{
      console.log(val); 
      this.result=val
      console.log(this.result.data);
      
      
    })
    
  }
  Search(){
    if(this.uname == ""){
      this.ngOnInit();
    }else{
      this.result = this.result.filter((res: { uname: string; }) =>{
        return res.uname.toLocaleLowerCase().match(this.uname.toLocaleLowerCase());
      });
    }
  }
}
