import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcWidgetComponent } from './wc-widget.component';
import { LazyElementsModule } from '@angular-extensions/elements';



@NgModule({
  declarations: [WcWidgetComponent],
  imports: [
    CommonModule, LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [WcWidgetComponent]
})
export class WcWidgetModule { }
