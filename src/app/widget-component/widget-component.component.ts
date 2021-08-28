import { Component, OnInit } from '@angular/core';
import { DataEntity } from '../../lib';

@Component({
  selector: 'app-widget-component',
  templateUrl: './widget-component.component.html',
  styleUrls: ['./widget-component.component.scss']
})
export class WidgetComponentComponent implements OnInit {

  public data: DataEntity[] = [
    { name: 'BOE0', url: '', ddline: '2020.11.20', comment: '' },
    { name: 'BOE1', url: '', ddline: '2020.11.20', comment: '' },
    { name: 'BOE2', url: '', ddline: '2020.11.20', comment: '' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
