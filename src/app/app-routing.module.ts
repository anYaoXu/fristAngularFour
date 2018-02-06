import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EchartsComponent} from './echarts/echarts.component';

const routes: Routes = [
  { path: 'echarts', component: EchartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
