import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';
import { ReportsComponent } from './reports.component';

export const routes: Routes = [
  { path: '', component: ReportsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ReportsModule { }
