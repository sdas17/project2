import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JavatechqserviceService } from '../javatechqservice.service';

@Component({
  selector: 'app-updatecomponet',
  templateUrl: './updatecomponet.component.html',
  styleUrls: ['./updatecomponet.component.css']
})
export class UpdatecomponetComponent implements OnInit {
  spaedit: any;
  
 
  constructor(public route: Router,private javatechqservice:JavatechqserviceService) { }

  ngOnInit(): void {
    this.spaedit = new FormGroup({
      Firstname: new FormControl('', [Validators.required, Validators.pattern('^[\\sa-zA-Z]*$')]),
      Lastname: new FormControl('', [Validators.required, Validators.pattern('^[\\sa-zA-Z]*$')]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      desgination: new FormControl(''),
      check: new FormControl(''),
      gender: new FormControl('')
      })
    
      this.javatechqservice.add.subscribe((data) => {
        this.spaedit.controls.Firstname.patchValue(data.Firstname)
        this.spaedit.controls.Lastname.patchValue(data.Lastname)
        this.spaedit.controls.Email.patchValue(data.Email)
        this.spaedit.controls.desgination.patchValue(data.desgination)
        this.spaedit.controls.check.patchValue(data.check)
        this.spaedit.controls.gender.patchValue(data.gender)
})

}
update()
  {
    console.log(this.spaedit.value)
    window.alert("update sucessfully")
  }
  back() {
    this.route.navigateByUrl("table1");
    }
}