import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';
import { ProyectosComponent } from './modules/proyectos/proyectos.component';
import { ContactoComponent } from './modules/contacto/contacto.component';

const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: InicioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouting { }