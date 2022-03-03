import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {

constructor(private service:UserServiceService) { }
 result:any=[]
uname:any
 
      ngOnInit(){
        this.service.getData().subscribe((val)=>{
          console.log(val);
          
          this.result=val
          console.log(this.result.data.userData);
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
    key:string='uname';
    reverse:boolean=false
      sort(key:any){
        this.key=key;
        this.reverse=!this.reverse
      }
}