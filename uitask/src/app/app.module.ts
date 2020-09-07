import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { MedicationsComponent } from './medications/medications.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { VaccinationsComponent } from './vaccinations/vaccinations.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { HealthMetricsComponent } from './health-metrics/health-metrics.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { LabTestsComponent } from './lab-tests/lab-tests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import {   MatButtonModule } from '@angular/material/button';
import {  MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ConditionsComponent,
    MedicationsComponent,
    AllergiesComponent,
    VaccinationsComponent,
    ContactInformationComponent,
    HealthMetricsComponent,
    LifestyleComponent,
    LabTestsComponent,
     
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
  
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
