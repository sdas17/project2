import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  UserName:string="subham"
  loadedposts =[]
  constructor(private http:HttpClient,private fb:FormBuilder) { }
  updateform=this.fb.group({
    userId:['',],
    id:['',],
    title:['',],
    body:['',],
  })
  ngOnInit(): void {
    this.fetchpost();
  }
  fetchpost() {
    this.http.get('https://jsonplaceholder.typicode.com/post.json').pipe(map(responseDatae =>{
      const postsArray=[];
      for(const key in responseDatae ){
        // postsArray.push(...responseDatae[key] ,)
      }
    })).subscribe(post=>{
      console.log(post)
    })
  }
  
  onCreatePost(postdata:{userId:number ,id:number,title:string,body:string}){
    this.http.post('https://jsonplaceholder.typicode.com/post.json',postdata)
  
  .subscribe(responseData =>{
    console.log(responseData)

  });
  }
  addData(){
    console.log(this.updateform.value)
  }
}
