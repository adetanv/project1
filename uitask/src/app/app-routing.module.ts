import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { MedicationsComponent } from './medications/medications.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { VaccinationsComponent } from './vaccinations/vaccinations.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { HealthMetricsComponent } from './health-metrics/health-metrics.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { LabTestsComponent } from './lab-tests/lab-tests.component';


const routes: Routes = [
  {
    path:'ContactInformation',
    component: ContactInformationComponent
  },
  {
    path:'About',
    component: AboutComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
