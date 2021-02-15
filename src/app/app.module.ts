import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ProdutoComponent } from './modules/produto/produto.component';
import { ItensComponent } from './shared/itens/itens.component';
import { HistoryComponent } from './shared/history/history.component';
import { StatisticsComponent } from './shared/statistics/statistics.component';
import { PedidoComponent } from './modules/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProdutoComponent,
    ItensComponent,
    HistoryComponent,
    StatisticsComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
