import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetAppModule } from './widget-app';
import { BaseAppComponent } from './base-app/base-app.component';
import { DataModule } from '../data';
import { AppService } from './app-service/app.service';
import { AppDataService } from './app-service/app-data.service';



@NgModule({
  declarations: [BaseAppComponent],
  imports: [
    CommonModule,
    WidgetAppModule,
    DataModule,
    WcWidgetModule
  ],
  providers: [AppDataService, AppService]
})
export class AppModule { }
