import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
 
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
