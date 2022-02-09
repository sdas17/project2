import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JavatechqserviceService {

  constructor(private http:HttpClient ) { }
  public getcontact1(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }

  // UserName=new BehaviorSubject<any>('');
  public add=new BehaviorSubject<any>('');

  
  }
