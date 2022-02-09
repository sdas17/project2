import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { ParentComponent } from './parent/parent.component';
import { UpdatecomponetComponent } from './updatecomponet/updatecomponet.component';

const routes: Routes = 
[
  //  {path:'table1',component:Demo3Component},
  //  {path:'table2',component:Demo2Component},
  //  {path:'update1',component:UpdatecomponetComponent},
  //  {path:'home',component:Demo1Component}
  {path:'parent',component:ParentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
