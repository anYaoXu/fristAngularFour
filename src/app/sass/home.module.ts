// import {NgModule} from "@angular/core/src/metadata/ng_module";
import { NgModule } from '@angular/core';
import { HomeSassComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SassAModule } from './sassA/sassA.module';
import { SassFunctionModule } from './sassB/sassFunction.module';

@NgModule({
  imports: [AppRoutingModule, SassAModule, SassFunctionModule],
  declarations: [HomeSassComponent]
})
export class HomeModule {}
