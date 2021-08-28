import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { LookupContext } from '../../lookup/models';
// import { InsightApp } from '../models/insight-app.model';
import { BaseAppService } from './base-app.service';
// import { isMobile, isMobileOrTablet } from '@fil-im/components';
// import { SetCurrentAppById } from 'insight-data';
import { Store } from '@ngxs/store';
// import { AppDefinitionEntity } from '@fil-im/models';
// import { LookupEventService } from '../../lookup/service/lookup-event.service';

export class BaseAppComponent implements OnInit, OnDestroy {
  // private appHandle: InsightApp;

  // public app: AppDefinitionEntity;

  public subscription: Subscription;
  // public previousLookupContext: LookupContext;

  public isMobile: boolean;
  public isMobileOrTablet: boolean;

  constructor(
    protected readonly baseService: BaseAppService,
    protected readonly store: Store,
    // protected readonly lookupEventService: LookupEventService,
    public appId: number
  ) {
    // this.store.dispatch(new SetCurrentAppById(this.appId));
  }

  ngOnInit() {
    // this.isMobile = isMobile();
    // this.isMobileOrTablet = isMobileOrTablet();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // public activateParent(appHandle: InsightApp) {}
}
