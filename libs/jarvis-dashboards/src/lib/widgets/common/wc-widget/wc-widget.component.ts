import { Component, ElementRef, Input } from '@angular/core';
// import { WidgetEntity } from '@fil-im/models';

@Component({
  selector: 'jarvis-wc-widget',
  templateUrl: './wc-widget.component.html',
  styleUrls: ['./wc-widget.component.scss']
})
//extends WcWidgetBase
export class WcWidgetComponent {
  // @Input() widget: WidgetEntity;

  public url: string;
  public tag: string;

  constructor(el: ElementRef) {
    // super(el);
    // this.url = this.widget.widgetDefinition.sourceURL;
    // this.tag = this.widget.widgetDefinition.tag;
    console.log(this.url);
    console.log(this.tag);
  }
}

// WidgetRegister.WEB_COMPONENT_WIDGET = WcWidgetComponent;

