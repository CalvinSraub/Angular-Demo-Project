import { Injectable } from '@angular/core';
import { DataService } from '../../data/data.service'

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(private dataService: DataService) { }

  // public initUser(): Observable<string> {
  //   return this.dataService.get('', 'user');
  //   // .subscribe((name) => console.log(name));
  // }

  // public getApps(): Observable<App[]> {
  //   // return this.dataService.get("/apps", "app")
  //   //   .pipe(map(res => res.apps))
  //   // ;

  //   const apps: App[] = [
  //     {
  //       id: -1,
  //       iconpath: 'apps/Inbox.png',
  //       title: 'Dashboard',
  //       name: 'Dashboard',
  //       isGlobal: false,
  //       isMobileReady: true
  //     },
  //     {
  //       id: 0,
  //       iconpath: 'apps/Inbox.png',
  //       route: '/ResearchInbox',
  //       title: 'My Research',
  //       name: 'Inbox',
  //       isGlobal: false,
  //       isMobileReady: true
  //     },
  //     {
  //       id: 2,
  //       iconpath: 'apps/AggregateViews.png',
  //       route: '/NFRDashboard',
  //       title: 'Aggregate Views',
  //       name: 'AggregateViews',
  //       isGlobal: true,
  //       hasFavourites: true,
  //       isIv1: true
  //     },
  //     // {
  //     //   id: 19,
  //     //   iconpath: "apps/ResearchSearch.png",
  //     //   route: "/ResearchSearch",
  //     //   title: "Research Search",
  //     //   name: "ResearchSearch",
  //     //   isGlobal: true,
  //     //   hasFavourites: true,
  //     //   isMobileReady: true,
  //     // },
  //     // {
  //     //   id: 4,
  //     //   iconpath: "apps/FundAsAStock.png",
  //     //   route: "/FundAsStock/summary",
  //     //   title: "Fund as a Stock",
  //     //   name: "FundStock",
  //     //   isGlobal: true,
  //     //   hasFavourites: true,
  //     //   isIv1: true,
  //     // },
  //     // {
  //     //   id: 3,
  //     //   iconpath: "apps/StockScreener.png",
  //     //   route: "/StockScreener/selection",
  //     //   title: "Stock Screener",
  //     //   name: "StockScreener",
  //     //   isGlobal: false,
  //     //   hasFavourites: true,
  //     //   isIv1: true,
  //     // },
  //     {
  //       id: 7,
  //       iconpath: 'apps/CreditAssignments.png',
  //       route: '/credit/assignments',
  //       title: 'Credit Assignments',
  //       name: 'CreditAssignments',
  //       isGlobal: true,
  //       hasFavourites: true
  //     },
  //     {
  //       id: 8,
  //       iconpath: 'apps/Holdings.png',
  //       route: '/Holdings',
  //       title: 'Holdings',
  //       name: 'Holdings',
  //       isGlobal: true
  //     },
  //     // {
  //     //   id: 1,
  //     //   iconpath: "apps/IndustrySheets.png",
  //     //   route: "/IndustrySheet/summary",
  //     //   title: "Industry Sheets",
  //     //   name: "IndustrySheets",
  //     //   isGlobal: true,
  //     //   hasFavourites: true,
  //     //   isIv1: true,
  //     // },
  //     {
  //       id: 18,
  //       iconpath: 'apps/MoneyMarketApprovals.png',
  //       title: 'Money Market Ratings',
  //       route: '/MoneyMarket',
  //       name: 'MoneyMarket',
  //       isGlobal: true
  //     },
  //     {
  //       id: 17,
  //       iconpath: 'apps/Dashboard.png',
  //       title: 'My Dashboard',
  //       route: '/MyDashboard',
  //       name: 'My Dashboard',
  //       isGlobal: false
  //     },
  //     {
  //       id: 20,
  //       iconpath: 'apps/creditRatings.png',
  //       route: '/RatingSearch',
  //       title: 'Credit Ratings',
  //       name: 'CreditRatings',
  //       isGlobal: true,
  //       hasFavourites: true
  //     },
  //     {
  //       id: 14,
  //       iconpath: 'apps/CompanyPacks.png',
  //       route: 'CompanyPacks',
  //       title: 'Company Packs',
  //       name: 'CompanyPacks',
  //       isGlobal: false
  //     },
  //     {
  //       id: 12,
  //       iconpath: 'apps/EquityAssignments.png',
  //       route: 'EquityAssignments',
  //       title: 'Equity Assignments',
  //       name: 'EquityAssignments',
  //       isGlobal: true
  //     },
  //     {
  //       id: 10,
  //       iconpath: 'apps/TechnicalRatings.png',
  //       route: 'TechnicalIndicators',
  //       title: 'Technical Indicators',
  //       name: 'TechnicalIndicators',
  //       isGlobal: false
  //     },
  //     {
  //       id: 9,
  //       iconpath: 'apps/BrokerResearch.png',
  //       route: '/BrokerResearch',
  //       title: 'Broker Research',
  //       name: 'BrokerResearch',
  //       isGlobal: true,
  //       hasFavourites: true,
  //       isMobileReady: true
  //     },
  //     {
  //       id: 25,
  //       iconpath: 'apps/BetReport.png',
  //       route: 'bet',
  //       title: 'Bet Report',
  //       name: 'BetReport',
  //       isGlobal: false
  //     },
  //     {
  //       id: 26,
  //       iconpath: 'apps/HAT.png',
  //       route: 'hat',
  //       title: 'HAT',
  //       name: 'HAT',
  //       isGlobal: true
  //     },
  //     {
  //       id: 28,
  //       iconpath: 'apps/Trades.png',
  //       route: 'trades',
  //       title: 'Trades',
  //       name: 'Trades',
  //       isGlobal: true
  //     },
  //     {
  //       id: 30,
  //       iconpath: 'apps/StockSummary.png',
  //       title: 'Stock Summary',
  //       route: '/StockSummary',
  //       name: 'StockSummary',
  //       isGlobal: true,
  //       isMobileReady: true
  //     },
  //     {
  //       id: 31,
  //       iconpath: 'apps/ESG.png',
  //       title: 'ESG',
  //       route: '/esg',
  //       name: 'ESG',
  //       isGlobal: false
  //     },
  //     {
  //       id: 32,
  //       iconpath: 'apps/Macro.png',
  //       title: 'Macro',
  //       route: '/Macro',
  //       name: 'Macro',
  //       isGlobal: true
  //     }
  //   ];
  //   return of(apps);
  // }

  // public updateApps(
  //   updatedAttributes: {
  //     appId: number;
  //     appAttributeKey: string;
  //     value: string;
  //   }[]
  // ) {
  //   return this.dataService
  //     .post('/App', 'app', updatedAttributes)
  //     .pipe(map((response) => Boolean(response)));
  // }

  // public getWidgetsForApp(
  //   appId: number
  // ): Observable<{
  //   widgets: WidgetDefinition[];
  //   defaultLayout: DashboardSection;
  // }> {
  //   return this.dataService.get(`/apps/${appId}/widgets`, 'app');
  // }
}
