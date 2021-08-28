import { WidgetRegister } from '../../widget-register';
import { Component, OnInit, ElementRef } from '@angular/core';
import { RootWidget, WidgetData } from '@jarvis-im/dashboards';

@Component({
  selector: 'jarvis-iframe-widget',
  templateUrl: './iframe-widget.component.html',
  styleUrls: ['./iframe-widget.component.scss']
})
export class IframeWidgetComponent extends RootWidget {
  /**
   * URL to display in iframe
   *
   */
  public url: string;

  constructor(el: ElementRef) {
    super(el);
  }

  protected processData(widgetData: WidgetData): void {
    const urlColumn = widgetData.columns.findIndex((col) => col.key === 'url');

    const url = widgetData.data[urlColumn][0];

    if (this.url !== url) {
      this.url = url;
    }
  }
}

WidgetRegister.IframeWidget = IframeWidgetComponent;
