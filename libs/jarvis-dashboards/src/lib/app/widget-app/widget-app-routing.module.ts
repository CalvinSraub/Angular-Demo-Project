import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAppComponent } from './dashboard/dashboard-app.component';

const routes: Routes = [{ path: '', component: DashboardAppComponent }]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DashboardAppRoutingModule { }
