import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { ArticlesComponent } from './articles.component';

export const routes: Routes = [
  { path: '', component: ArticlesComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ArticlesModule { }
