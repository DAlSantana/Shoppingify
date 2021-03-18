import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PedidoComponent } from "src/app/modules/pedido/pedido.component";


import {HistoryComponent} from "./history.component";
import { HistoryRoutingModule } from "./history.routing.module";
import { OrderHistoryComponent } from './order-history/order-history.component'

@NgModule({
    imports:[
        CommonModule,
        HistoryRoutingModule,
    ],
    declarations:[HistoryComponent, OrderHistoryComponent,PedidoComponent]
})

export class HistoryModule {}