import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DepartmentsComponent } from './departments/departments.component';
import { RegistrationComponent } from './registration/registration.component';
import { PoliciesComponent } from './policies/policies.component';


const routes: Routes = [
  {
      path: 'Home',
      component: HomeComponent
    },
  
    {
      path: 'About',
      component: AboutComponent
    },
    {
      path: 'Services',
      component: ServicesComponent
    },
    {
      path: 'ContactUs',
      component: ContactUsComponent
    },
    {
      path: 'Departments',
      component: DepartmentsComponent
    },
    {
      path: 'Registration',
      component: RegistrationComponent
    },
    {
      path: 'Policies',
      component: PoliciesComponent
    },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
