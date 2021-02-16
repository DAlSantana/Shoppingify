import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HistoryComponent } from "./history.component";
import { OrderHistoryComponent } from "./order-history/order-history.component";

const historyRoutes = [
    {path:'history',component:HistoryComponent},
    {path: 'history/order',component:OrderHistoryComponent}
];

@NgModule({
    imports:[RouterModule.forChild(historyRoutes)],
    exports: [RouterModule]
})


export class HistoryRoutingModule{}