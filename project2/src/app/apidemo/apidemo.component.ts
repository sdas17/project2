import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { JavatechqserviceService } from '../javatechqservice.service';

@Component({
  selector: 'app-apidemo',
  templateUrl: './apidemo.component.html',
  styleUrls: ['./apidemo.component.css']
})

export class ApidemoComponent implements OnInit {
 name="subham das"

  constructor(private javatecqservice:JavatechqserviceService) { }

  ngOnInit(): void {
    console.log(this.name)
    }
    onclick(){
      console.log('1111',this.name)
      // this.javatecqservice.UserName.next(this.name);
    }
 
      } 
    
