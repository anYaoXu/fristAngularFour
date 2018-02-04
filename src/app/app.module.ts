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
import {NgxEchartsModule} from 'ngx-echarts';


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
    EchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
