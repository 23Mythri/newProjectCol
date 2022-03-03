import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testview',
  templateUrl: './testview.component.html',
  styleUrls: ['./testview.component.css']
})
export class TestviewComponent implements OnInit {
 
  luco: any;
  haemo: any;
  data1: any;
  gluco: any;
  constructor(private service: UserServiceService, private route: Router) { }

  result: any
  ngOnInit() {
    this.service.getViewSample().subscribe((data: any) => {
      console.log(data)
      this.result = data
      console.log(this.result.data);
      this.haemo = this.result.data[0].haemotology
      this.gluco = this.result.data[0].glucometry

      console.log(this.haemo);
      console.log(this.gluco);
})
}
}
  

