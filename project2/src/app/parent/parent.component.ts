import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  val:number=97775056;

  data={
    name:'subham',
    age:30,
    emial:'subhamkvgms223@gmail.com'

  }
 
  constructor() { }
  ngOnInit(): void {


  }

}
