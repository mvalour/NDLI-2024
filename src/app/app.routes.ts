import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChaosInputComponent } from './components/chaos-input/chaos-input.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'chaos',
        component: ChaosInputComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];
