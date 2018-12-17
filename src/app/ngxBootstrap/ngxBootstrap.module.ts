import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core/src/metadata/ng_module';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxBootstrapComponent } from './ngxBootstrap.component';

@NgModule({
  imports: [CommonModule, PaginationModule.forRoot()],
  declarations: [NgxBootstrapComponent]
})
export class NgxBootstrapModule {}
