import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LlistaProductesComponent } from './components/llista-productes/llista-productes.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MyPipesComponent } from './components/my-pipes/my-pipes.component';

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
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'pipes',
        component: MyPipesComponent
    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
];
