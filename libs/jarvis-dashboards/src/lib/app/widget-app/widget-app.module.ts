import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAppComponent } from './dashboard/dashboard-app.component';
import { DashboardAppRoutingModule } from './widget-app-routing.module';
import { LazyElementsModule } from '@angular-extensions/elements';
import { InlineSVGModule } from 'ng-inline-svg';
import { GridsterModule } from 'angular-gridster2';

@NgModule({
  declarations: [DashboardAppComponent],
  imports: [
    CommonModule,
    DashboardAppRoutingModule,
    InlineSVGModule,
    LazyElementsModule,
    GridsterModule
  ]
})
export class WidgetAppModule { }
