import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './shared/history/history.component';
import { ItensComponent } from './shared/itens/itens.component';
import { StatisticsComponent } from './shared/statistics/statistics.component';

const routes: Routes = [
  {path:'',component:ItensComponent},
  {path:'itens',component:ItensComponent},
  {path:'history',component:HistoryComponent},
  {path:'statistics',component:StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
