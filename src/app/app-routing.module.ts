import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItensComponent } from './shared/itens/itens.component';

const routes: Routes = [
  {path:'',component:ItensComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
