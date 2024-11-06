import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'home'
    },
    {
        path:'cliente',
        component:ClienteComponent,
        title:'cliente'
    },
    {
        path:'**',
        redirectTo:'',
        title:'full'
    }
];
