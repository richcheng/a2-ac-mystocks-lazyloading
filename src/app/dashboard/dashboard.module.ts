import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    SharedModule,
    NgbModule.forRoot(),
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  entryComponents: [
    DashboardComponent
  ]

})
export class DashboardModule { }