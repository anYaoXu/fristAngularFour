import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EchartsComponent} from './echarts/echarts.component';
import {ASassComponent} from './sass-test/a.component';

const routes: Routes = [
  { path: 'echarts', component: EchartsComponent},
  { path: 'sassA', component: ASassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
