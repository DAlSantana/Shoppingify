import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ProdutoComponent } from './modules/produto/produto.component';
import { ItensComponent } from './shared/itens/itens.component';
import { StatisticsComponent } from './shared/statistics/statistics.component';
import { PedidoComponent } from './modules/pedido/pedido.component';
import { HistoryModule } from './shared/history/history.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProdutoComponent,
    ItensComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    HistoryModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
