import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LlistaProductesComponent } from './components/llista-productes/llista-productes.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';

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
    },
    {
        path:'showproducts/:nombre',
        component: ShowproductsComponent
    },
    {
        path: "product/:nom", 
        component: ShowproductsComponent 
    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
];
