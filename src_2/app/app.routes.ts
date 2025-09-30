import { Routes } from '@angular/router';
import { Compo1Component } from './components/compo1/compo1.component';
import { Compo2Component } from './components/compo2/compo2.component';

export const routes: Routes = [

     {
            path:'componenteuno',
            component:Compo1Component
        },
        {
            path:'componentetres',
            component:Compo2Component
        },
];
