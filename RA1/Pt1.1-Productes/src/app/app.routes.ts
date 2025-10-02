import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LlistaProductesComponent } from './components/llista-productes/llista-productes.component';

export const routes: Routes = [
    {
        path:'', 
        component: HomepageComponent
    },
    {
        path:'home',
        component: HomepageComponent
    },
    {
        path:'llistaProductes',
        component: LlistaProductesComponent
    }
];
