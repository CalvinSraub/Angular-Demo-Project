import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcWidgetComponent } from './wc-widget.component';

describe('WcWidgetComponent', () => {
  let component: WcWidgetComponent;
  let fixture: ComponentFixture<WcWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
