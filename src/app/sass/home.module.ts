
import {NgModule} from "@angular/core/src/metadata/ng_module";
import { HomeSassComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import {SassAModule} from './sassA/sassA.module';

@NgModule({
  imports: [
    AppRoutingModule,
    SassAModule
  ],
  declarations: [HomeSassComponent],
})
export class HomeModule { }
