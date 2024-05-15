import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsResultComponent } from './cards-result/cards-result.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
     {
        path: 'result',
        component: CardsResultComponent
     }
];
