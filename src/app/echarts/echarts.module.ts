
import {NgModule} from "@angular/core/src/metadata/ng_module";
import { EchartsComponent } from './echarts.component';
// import { AngularEchartsModule } from 'ngx-echarts';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  imports: [
    NgxEchartsModule
  ],
  declarations: [EchartsComponent],
})
export class EchartsModule { }
