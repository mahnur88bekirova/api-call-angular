import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';
import { BlogsComponent } from './blogs.component';

export const routes: Routes = [
  { path: '', component: BlogsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class BlogsModule { }
