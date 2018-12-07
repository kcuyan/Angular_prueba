//Importar modulos del router de angular.
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes

import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { videojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

//Array de rutas dar de alta
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuego', component: videojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:nombre/:followers', component: CursosComponent},
    {path: 'externo', component: ExternoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**',component: HomeComponent}

];

//Exportar el modulo del Routing

export const appRoutingProviders: any[] = []; //servicio del routing
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);//exportamos el modulo de routing

