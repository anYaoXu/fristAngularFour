import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EchartsComponent} from './echarts/echarts.component';
import {HomeSassComponent} from './sass/home.component';
import {SassAComponent} from './sass/sassA/sassA.component';

const routes: Routes = [
  { path: 'echarts', component: EchartsComponent},
  { path: 'sassHome', component: HomeSassComponent,
    children: [
      {
        path: 'sassA', component: SassAComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
