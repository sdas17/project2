import { Component, OnInit } from '@angular/core';
import { JavatechqserviceService } from '../javatechqservice.service';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  Name1:any;
  myclass:string="";
  constructor(public service:JavatechqserviceService) {
    if(this.marks>=90){
      this.myclass="class1";
    }
    else
    {
      this.myclass="class2";
    }
   }
  // myclass:string="";
  marks:number=90;
  ngOnInit(): void {
    this.onget();
  }
 onget(){
  //  this.service.UserName.subscribe(data=>{
  //   console.log("name is",data)
  //   this.Name1=data
  // })
 }
}
