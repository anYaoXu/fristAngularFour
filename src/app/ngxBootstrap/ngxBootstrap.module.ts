
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { NgxBootstrapComponent } from './ngxBootstrap.component';
import { ButtonsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    ButtonsModule.forRoot()
  ],
  declarations: [NgxBootstrapComponent],
})
export class NgxBootstrapModule { }
