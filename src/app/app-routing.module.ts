import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router'
import { fromEventPattern } from 'rxjs';
import { TableComponent } from './table/table.component'
import { ChartComponent } from './chart/chart.component'

const routes: Routes = [
  {path: '', redirectTo: 'chart', pathMatch: 'full'},
  {path: 'table', component: TableComponent},
  {path: 'chart', component: ChartComponent}
]

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
