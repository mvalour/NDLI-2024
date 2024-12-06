import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChaosComponent } from './pages/chaos/chaos.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'chaos',
        component: ChaosComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];
