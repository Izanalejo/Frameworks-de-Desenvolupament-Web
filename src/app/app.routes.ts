import { Routes } from '@angular/router';
import { Compo1Component } from './components/compo1/compo1.component';
import { Compo3Component } from './components/compo3/compo3.component';

export const routes: Routes = [
    {
        path:'componenteuno',
        component:Compo1Component
    },
    {
        path:'componentetres',
        component:Compo3Component
    }
];
