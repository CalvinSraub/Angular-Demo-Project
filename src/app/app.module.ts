import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponentComponent } from './widget-component/widget-component.component';

import { AgGridModule } from 'ag-grid-angular';

// import { ButtonModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [AppComponent, WidgetComponentComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule.withComponents([]), AccordionModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
