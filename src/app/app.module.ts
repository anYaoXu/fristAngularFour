import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { EchartsComponent } from './echarts/echarts.component';
// import { AngularEchartsModule } from 'ngx-echarts';
// import { EchartsComponent } from './echarts/echarts.component';
import { EchartsModule } from './echarts/echarts.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { HomeModule } from './sass/home.module';
import { HightChartsModule } from './hightcharts/hightCharts.module';
import { NgxBootstrapModule } from './ngxBootstrap/ngxBootstrap.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxEchartsModule,
    EchartsModule,
    HomeModule,
    HightChartsModule,
    NgxBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
