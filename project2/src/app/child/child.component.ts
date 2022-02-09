import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import { MatSingleDateSelectionModel } from '@angular/material/datepicker';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() hero: any;
@Output() parentcomponet:EventEmitter<any>= new EventEmitter;
  constructor() { }

  ngOnInit(): void {
    this.parentcomponet.emit("subhams")
  }

}
