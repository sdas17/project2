import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JavatechqserviceService } from '../javatechqservice.service';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
  // UserName:string="subham"
  listData: any=[];
  spa: any;
  // @Input()searchTerm:string | undefined
  constructor(private fb:FormBuilder,private javatecqservice:JavatechqserviceService,private router:Router) { }
  saveForm(){
  console.log(this.profileForm.value)
  this.listData.push(this.profileForm.value)
  window.alert("save sucessfully")


  }
  profileForm=this.fb.group({
    Firstname:['',Validators.required,Validators.maxLength(7),Validators.pattern('/^[a-zA-Z]+$/')],
    Lastname:['',Validators.required,Validators.maxLength(7),Validators.pattern('/^[a-zA-Z]+$/')],
    address:['',Validators.required,Validators.maxLength(10),Validators.pattern('/^[a-zA-Z]+$/')],
    password:[''],
    cpassword:[''],
    dob:['',Validators.required,Validators.pattern('/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/')],
    gender:['',Validators.required],
    Email:['',Validators.required],
    mobienumber:['',Validators.required],
    desgination:['',Validators.required],
   
  })


  ngOnInit(): void {
   
  }
  updateUser()
   {
    var b=this.profileForm.value
    this.javatecqservice.add.next(b)
   
    this.router.navigateByUrl("update1");
  
   } 
 
  DeltedMethod(element: any){
      this.listData.forEach( (value: any,index: any)=> {
        if (value == element) {
          this.listData.splice(index,1);
          
        }
        
      })
      }

  }



