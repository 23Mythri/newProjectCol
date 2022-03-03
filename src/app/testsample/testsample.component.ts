import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testsample',
  templateUrl: './testsample.component.html',
  styleUrls: ['./testsample.component.css']
})
export class TestsampleComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   gl(){
     this.router.navigate(['glucometry'])
   }

}
