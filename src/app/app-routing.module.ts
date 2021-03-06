import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EchartsComponent} from './echarts/echarts.component';
import {HomeSassComponent} from './sass/home.component';
import {SassAComponent} from './sass/sassA/sassA.component';
import {SassFunctionComponent} from './sass/sassB/sassFunction.component';
import {HightChartsComponent} from './hightcharts/hightCharts.component';
import {NgxBootstrapComponent} from './ngxBootstrap/ngxBootstrap.component';

const routes: Routes = [
  { path: 'echarts', component: EchartsComponent},
  { path: 'sassHome', component: HomeSassComponent,
    children: [
      {
        path: 'sassA', component: SassAComponent
      },
      {
        path: 'sassFunction', component: SassFunctionComponent
      }
    ]
  },
  { path: 'hCharts', component: HightChartsComponent},
  { path: 'ngxBootstrap', component: NgxBootstrapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
