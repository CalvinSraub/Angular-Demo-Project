// import { InsightConfig } from '../config/insight-config';
// import { Config } from './../../../../../apps/insight-lite/src/app/static-config';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import hash from 'object-hash';
import { Observable, ReplaySubject, timer, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError, finalize, first, shareReplay, switchMap, tap } from 'rxjs/operators';
// import { BusyNotificationService } from './busy-notification.service';
// import { IDataService } from './data-service.model';
// import { Platform } from './models/platform.model';
// import { RequestOptions, DataService as DataServiceContract } from '@fil-im/models';

type CacheOptions = Partial<{ cacheExpiry: number }>;

type Service = string;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public isBusy = false;
  private busyCounter = 0;
  private defaultBusyTime = 10000;
  private permanentCache: { [key: string]: ReplaySubject<any> } = {};
  private requestQueue: Array<Observable<any>> = new Array<Observable<any>>();
  private headers: HttpHeaders;
  public researchMobileApi: string;
  public postConfig: any = {
    withCredentials: true,
    method: 'POST'
  };

  public patchConfig: any = {
    withCredentials: true,
    method: 'PATCH'
  };

  private downloadFileConfig = {
    responseType: 'blob',
    withCredentials: true,
    observe: 'response'
  } as {
    responseType: 'blob';
    withCredentials: boolean;
    observe: 'response';
  };

  public putConfig: any = {
    withCredentials: true,
    method: 'PUT'
  };

  // private option: RequestOptions;

  private requestCache: {
    [endpoint: string]: {
      [method: string]: {
        [bodyHash: string]: Observable<any>;
      };
    };
  } = {};

  constructor(private http: HttpClient,
    // private busyService: BusyNotificationService, 
    // private readonly config: InsightConfig
  ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json;q=0.8;q=0.9'
    });

    // this.option = { headers, withCredentials: true, responseType: 'json' };
    console.log('DataService initialised');
  }

  // public createUrlForPlatform(url: string, service: Service, platform: Platform): string {
  //   let baseUrl = this.getServiceUrl(service);
  //   if (url[0] === '/' && baseUrl[baseUrl.length - 1] === '/') {
  //     baseUrl = baseUrl.substring(0, baseUrl.length - 1);
  //   } else if (url[0] !== '/' && baseUrl[baseUrl.length - 1] !== '/') {
  //     baseUrl = baseUrl + '/';
  //   }
  //   return baseUrl + url;
  // }

  private handleURLCreation(baseUrl: string, url: string) {
    if (url[0] === '/' && baseUrl[baseUrl.length - 1] === '/') {
      baseUrl = baseUrl.substring(0, baseUrl.length - 1);
    } else if (url[0] !== '/' && baseUrl[baseUrl.length - 1] !== '/') {
      baseUrl = baseUrl + '/';
    }
    return baseUrl + url;
  }

  // public createUrl(url: string, service: Service): Observable<string> {
  //   return of(false).pipe(
  //     map((isWrapper) => {
  //       const baseUrl = this.getServiceUrl(service, isWrapper ? 'mobile' : 'desktop');
  //       return this.handleURLCreation(baseUrl, url);
  //     }),
  //     catchError((err) => {
  //       const baseUrl = this.getServiceUrl(service, 'desktop');
  //       return this.handleURLCreation(baseUrl, url);
  //     })
  //   );
  // }

  // public getServiceUrl(service: string, platform?: 'mobile' | 'desktop') {
  //   const url: any = this.config.getServiceUrl(service);

  //   if (!url) {
  //     throw new Error(`No URL found for service: ${service}`);
  //   }

  //   if (typeof url === 'string') {
  //     return url;
  //   }

  //   return url[platform];
  // }

  private handleCacheForRequest(cacheOptions: CacheOptions, request: Observable<any>, url: string, method: string, body?: object) {
    const requestKey = body ? hash.sha1(body) : 'default';

    if (this.requestCache[url] && this.requestCache[url][method] && this.requestCache[url][method][requestKey]) {
      return this.requestCache[url][method][requestKey].pipe(first());
    }

    const requestSubject = request.pipe(
      shareReplay(1),
      finalize(() => {
        if (cacheOptions.cacheExpiry) {
          timer(cacheOptions.cacheExpiry * 1000).subscribe(() => {
            if (this.requestCache[url][method][requestKey]) {
              delete this.requestCache[url][method][requestKey];
            }
          });
        }
      })
    );

    let obj: any = this.requestCache;

    [url, method].forEach((path) => {
      if (!obj[path]) {
        obj[path] = {};
      }

      obj = obj[path];
    });

    this.requestCache[url][method][requestKey] = requestSubject;
    return requestSubject.pipe(first());
  }

  // public getPromise<T>(url): Observable<T> {
  //   return this.http.get<T>(url);
  // }

  // public get(relativeURL: string, service: Service, options?: RequestOptions): Observable<any> {
  //   return this.createUrl(relativeURL, service).pipe(
  //     switchMap((url) => {
  //       console.log('get url', url);
  //       if (!options) {
  //         const request = this.http.get(url, this.option);
  //         return request;
  //       } else {
  //         let request = this.http.get(url, {
  //           ...options,
  //           withCredentials: true
  //         });

  //         if (options.cacheOptions) {
  //           request = this.handleCacheForRequest(options.cacheOptions, request, url, 'GET', options.params || {});
  //         }

  //         return request;
  //       }
  //     })
  //   );
  // }

  // public getForPoll(relativeURL: string, service: Service): Observable<any> {
  //   return this.createUrl(relativeURL, service).pipe(
  //     switchMap((url) => {
  //       return this.http.get(url, this.option);
  //     })
  //   );
  // }

  // public getLocal(url: string): Observable<any> {
  //   const localUrl = location.protocol + '//' + location.hostname + ':' + location.port + '/';
  //   const request = this.http.get(localUrl + url);
  //   return this.handleBusyState(request);
  // }

  // // Todo: needed????
  // public postWithHeader(relativeURL: string, service: Service, data: any): Observable<any> {
  //   return this.createUrl(relativeURL, service).pipe(
  //     switchMap((url) => {
  //       const request = this.http.post(url, data, this.option);
  //       return this.handleBusyState(request);
  //     })
  //   );
  // }

  // public post(relativeURL: string, service: Service, data: any, options?: RequestOptions): Observable<any> {
  //   return this.createUrl(relativeURL, service).pipe(
  //     switchMap((url) => {
  //       let request: any;

  //       if (options) {
  //         request = this.http.post(url, data, {
  //           ...options,
  //           withCredentials: true
  //         });
  //         if (options.cacheOptions) {
  //           request = this.handleCacheForRequest(options.cacheOptions, request, url, 'POST', data);
  //         }
  //       } else {
  //         request = this.http.post(url, data, this.postConfig);
  //       }
  //       return request;
  //     })
  //   );
  // }

  // public patch(relativeURL: string, service: Service, data: any, options?: RequestOptions): Observable<any> {
  //   return this.createUrl(relativeURL, service).pipe(
  //     switchMap((url) => {
  //       const request = this.http.patch(url, data, {
  //         ...(options || this.patchConfig),
  //         withCredentials: true
  //       });
  //       return this.handleBusyState(request);
  //     })
  //   );
  // }

  // public put(relativeURL: string, service: Service, data: any, options?: RequestOptions): Observable<any> {
  //   return this.createUrl(relativeURL, service).pipe(
  //     switchMap((url) => {
  //       const request = this.http.put(url, data, {
  //         ...(options || this.patchConfig),
  //         withCredentials: true
  //       });
  //       return this.handleBusyState(request);
  //     })
  //   );
  // }

  // public postExcel(relativeURL: string, service: Service, data: any): Observable<any> {
  //   return this.createUrl(relativeURL, service).pipe(
  //     switchMap((url) => {
  //       const headers: Headers = new Headers();
  //       headers.set('enctype', 'multipart/form-data');
  //       const request = this.http.post(url, data, this.postConfig);
  //       return this.handleBusyState(request);
  //     })
  //   );
  // }

  // Todo: Needed?
  // public postWithHeaderMultiPart(relativeURL: string, service: Service, data: any): Observable<any> {
  //   return this.createUrl(relativeURL, service).pipe(
  //     switchMap((url) => {
  //       const headers = {
  //         Accept: 'application/json'
  //       };
  //       const options = { headers, withCredentials: true };
  //       const request = this.http.post(url, data, options);
  //       return this.handleBusyState(request);
  //     })
  //   );
  // }

  // public delete(relativeURL: string, service: Service, id: string): Observable<any> {
  //   return this.createUrl(relativeURL, service).pipe(
  //     switchMap((url) => {
  //       return this.http.delete(url + id, this.option);
  //     })
  //   );
  // }

  // public downloadFile(relativeURL: string, service: Service, data?: any, overrideBusyTime?: number, options?: RequestOptions): Observable<HttpResponse<Blob>> {
  //   return this.createUrl(relativeURL, service).pipe(
  //     switchMap((url) => {
  //       if (data) {
  //         const request = this.http.post(url, data, {
  //           ...(options || {}),
  //           withCredentials: true,
  //           observe: 'response',
  //           responseType: 'blob'
  //         });
  //         return this.handleBusyState(request, overrideBusyTime);
  //       } else {
  //         const request = this.http.get(url, {
  //           ...(options || {}),
  //           withCredentials: true,
  //           observe: 'response',
  //           responseType: 'blob'
  //         });
  //         return this.handleBusyState(request, overrideBusyTime);
  //       }
  //     })
  //   );
  // }

  // private handleBusyState<T>(request: Observable<T>, overrideBusyTime?: number): Observable<T> {
  //   this.addToRequestQueue(request);

  //   // Hard limit for idle timer
  //   setTimeout(this.onRequestResolve.bind(this, request, true), overrideBusyTime ? overrideBusyTime : this.defaultBusyTime);

  //   return request.pipe(finalize(this.onRequestResolve.bind(this, request, false)));
  // }

  // private addToRequestQueue(request: Observable<any>) {
  //   this.requestQueue.push(request);
  //   this.toggleBusyIndicator(++this.busyCounter > 0);
  // }

  // private onRequestResolve(request: Observable<any>, timerElapsed: boolean) {
  //   const ix = this.requestQueue.indexOf(request);
  //   if (ix > -1) {
  //     if (this.busyCounter > 0) {
  //       this.busyCounter = this.busyCounter - 1;
  //     }
  //     this.toggleBusyIndicator(this.busyCounter > 0);
  //     this.requestQueue.splice(ix, 1);
  //   }
  // }

  // private toggleBusyIndicator(state: boolean): void {
  //   if (this.isBusy !== state) {
  //     this.isBusy = state;
  //     this.busyService.PublishEvent(state);
  //   }
  // }

  // public getOnce<T>(key: string, relativeURL: string, service: Service, options?: any): Observable<T> {
  //   return this.createUrl(relativeURL, service).pipe(
  //     switchMap((url) => {
  //       if (this.permanentCache[key]) {
  //         return this.permanentCache[key];
  //       }
  //       this.permanentCache[key] = new ReplaySubject<T>(1);
  //       this.get(url, service, options).subscribe((response) => {
  //         this.permanentCache[key].next(response as T);
  //       });
  //       return this.permanentCache[key];
  //     })
  //   );
  // }

  /**
   * Method for downloading a document
   * If get filename is not specified, then it will look for a filename property in the content disposition header
   *
   */
  // public downloadDocument(url: string, service: Service, postData?: any, getFilename?: () => string, overrideBusyTime?: number, options?: RequestOptions) {
  //   const request = this.downloadFile(url, service, postData, overrideBusyTime, options);

  //   return request.pipe(
  //     tap((res) => {
  //       const blob = res.body;
  //       const objectUrl = URL.createObjectURL(blob);
  //       const anchor = document.createElement('a');

  //       let fileName = '';
  //       if (getFilename) {
  //         fileName = getFilename();
  //       } else {
  //         const i = res.headers.get('content-disposition').indexOf('filename=') + 9;
  //         fileName = res.headers.get('content-disposition').substr(i);
  //         if (fileName && fileName[0] === '"') {
  //           fileName = fileName.substr(1, fileName.length - 2);
  //         }
  //       }

  //       anchor.download = fileName;
  //       anchor.href = objectUrl;
  //       anchor.click();
  //     })
  //   );
  // }
}
