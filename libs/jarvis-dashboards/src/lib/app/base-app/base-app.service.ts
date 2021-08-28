// import { LookupService } from './../../lookup/service/lookup.service';
import { Injectable } from '@angular/core';
// import { StateService } from '../../state/models/service/state.service';
// import { UserPreferencesService } from '../../user-preferences/user-preferences.service';
import { AppInitService, AppService } from '../app-service';
// import { UserNotificationService } from '../../user-notification/user-notification.service';

@Injectable({
  providedIn: 'root'
})
export class BaseAppService {
  constructor(
    public readonly appService: AppService,
    public readonly appInitService: AppInitService,
    // public readonly stateService: StateService,
    // public readonly lookupService: LookupService,
    // public readonly userPreferences: UserPreferencesService,
    // public readonly userNotificationService: UserNotificationService
  ) { }
}