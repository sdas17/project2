import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data="brusce";
  parentcomponet(datac:any)
  {
    console.log(datac)
  }
}
