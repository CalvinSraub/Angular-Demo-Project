import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { TokenService } from '../../token';
import { Select, Store } from '@ngxs/store';
// import { InitApps, InitUser, InitConfig, SetCurrentApp, SetCurrentAppById, SaveSitePreference } from 'insight-data';
// import { AppDefinitionEntity, AppType, UserDomainEntity, UserEntity, RoleEntity } from '@fil-im/models';
// import { ConfigService } from 'insight-data';
import { access } from 'fs';
import { DataService } from '../../data';

const jwtDecode = require('jwt-decode');

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  accessToken: string;
  refreshToken: string;

  constructor(
    private http: HttpClient,
    // private config: ConfigService,
    // private tokenService: TokenService,
    private store: Store,
    private dataService: DataService
  ) { }

  // async initApp(environment) {
  //   await this.initConfig(environment);
  //   await this.initData();

  //   return Promise.resolve();
  // }

  // private async initConfig(environment) {
  //   const serviceProxy = await this.config.initConfig(environment);
  //   this.store.dispatch(new InitConfig({ serviceProxy, environment }));
  // }

  private async initData() {
    // const { accessToken, refreshToken } = await this.dataService.get('/auth/token', 'auth', { withCredentials: true }).toPromise();
    // decode from access token
    // const payload: { user: UserEntity; roles: RoleEntity[] } = jwtDecode(accessToken);
    // console.log('payload', payload);

    // this.tokenService.setToken(accessToken, refreshToken);

    // ${payload.user.corpId}
    // const data: UserDomainEntity = await this.dataService.get(`/user/domain/${payload.user.corpId}`, 'user').toPromise();
    // const roles = data.roles;
    // const user = data.user;
    // const apps = data.apps;
    // const userPreference = data.userPreference;

    // user.roles = roles;

    // this.store.dispatch(new InitApps(apps));
    // this.store.dispatch(new InitUser({ user, sitePreference: userPreference.sitePreference }));

    return Promise.resolve();
  }
}
