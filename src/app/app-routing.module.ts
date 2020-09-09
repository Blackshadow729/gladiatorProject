import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { BindingdemoComponent } from './components/bindingdemo/bindingdemo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'about',component: AboutComponent},
  {path: 'emp',component: EmployeeComponent}, 
  {path: 'empList',component: EmployeeListComponent}, 
  {path: 'react',component: ReactiveFormComponent}, 
  {path: 'user',component:UserComponent }, 
  {path: 'bind',component:BindingdemoComponent},
  {path: 'classdemo',component:NgclassdemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
