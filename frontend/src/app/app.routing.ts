import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';
import { ProyectosComponent } from './modules/proyectos/proyectos.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { SobreMiComponent } from './modules/sobre-mi/sobre-mi.component';
import { PanelAdministracionComponent } from './modules/panel-administracion/panel-administracion.component';
import { PanelAdministracionInicioComponent } from './modules/panel-administracion-inicio/panel-administracion-inicio.component';
import { PanelAdministracionProyectosComponent } from './modules/panel-administracion-proyectos/panel-administracion-proyectos.component';
import { PanelAdministracionEstudiosComponent } from './modules/panel-administracion-estudios/panel-administracion-estudios.component';
import { PanelAdministracionTrabajosComponent } from './modules/panel-administracion-trabajos/panel-administracion-trabajos.component';

const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'sobreMi', component: SobreMiComponent},
    {path: 'panelAdministracionRamses', component: PanelAdministracionComponent},
    {path: 'panelAdministracionInicio', component: PanelAdministracionInicioComponent},
    {path: 'panelAdministracionProyectos', component: PanelAdministracionProyectosComponent},
    {path: 'panelAdministracionEstudios', component: PanelAdministracionEstudiosComponent},
    {path: 'panelAdministracionTrabajos', component: PanelAdministracionTrabajosComponent},
    {path: '**', component: InicioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouting { }