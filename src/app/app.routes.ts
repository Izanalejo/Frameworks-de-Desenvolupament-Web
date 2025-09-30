import { Routes } from '@angular/router';
import { Compo1Component } from './components/compo1/compo1.component';
import { Compo3Component } from './components/compo3/compo3.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path:'', // Acabo de entrar y no he puesto nada
        component: Compo3Component,
    },
    {
        path:'componenteuno',
        component:Compo1Component
    },
    {
        path:'componentetres',
        component:Compo3Component
    },
    {
        //ESTA RUTA SIEMPRE SE PONE LA ÚLTIMA
        path:'**', //El usuario de confunde de ruta o no existe
        component:PagenotfoundComponent
    }
];
