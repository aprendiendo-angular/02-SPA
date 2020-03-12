import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeTarjetaDetalleComponent  } from './components/shared/heroe-tarjeta-detalle/heroe-tarjeta-detalle.component';

const APP_ROUTES: Routes = [
    { path: 'home', component : HomeComponent },
    { path: 'about', component : AboutComponent },
    { path: 'heroe', component : HeroeComponent },
    { path: 'heroe/:cd', component : HeroeComponent },
    { path: 'heroe/detalle/:id', component : HeroeTarjetaDetalleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
