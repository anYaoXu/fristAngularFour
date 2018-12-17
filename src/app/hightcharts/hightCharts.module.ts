// import {NgModule} from '@angular/core/src/metadata/ng_module';
import { NgModule } from '@angular/core';
import { HightChartsComponent } from './hightCharts.component';
// import { AngularEchartsModule } from 'ngx-echarts';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [NgxEchartsModule],
  declarations: [HightChartsComponent]
})
export class HightChartsModule {}
