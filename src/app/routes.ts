import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";



const routeConfig:Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Home Page'
    },
    {
        path:'details/:id',
        component:DetailComponent,
        title:'Detail Page'
    }
];
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(routeConfig);

