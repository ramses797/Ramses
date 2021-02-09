import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from 'src/app/app.routing';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/modules/shared/header/header.component';
import { InicioComponent } from 'src/app/modules/inicio/inicio.component';
import { ProyectosComponent } from 'src/app/modules/proyectos/proyectos.component';
import { ContactoComponent } from 'src/app/modules/contacto/contacto.component';
import { nombreDirective } from 'src/app/modules/shared/validators/nombre/nombre.directive';
import { empresaDirective } from 'src/app/modules/shared/validators/empresa/empresa.directive';
import { correoDirective } from 'src/app/modules/shared/validators/correo/correo.directive';
import { SobreMiComponent } from './modules/sobre-mi/sobre-mi.component';
import { PanelAdministracionComponent } from './modules/panel-administracion/panel-administracion.component';
import { PanelAdministracionInicioComponent } from './modules/panel-administracion-inicio/panel-administracion-inicio.component';
import { PanelAdministracionProyectosComponent } from './modules/panel-administracion-proyectos/panel-administracion-proyectos.component';
import { PanelAdministracionEstudiosComponent } from './modules/panel-administracion-estudios/panel-administracion-estudios.component';
import { PanelAdministracionTrabajosComponent } from './modules/panel-administracion-trabajos/panel-administracion-trabajos.component';
import { PanelAdministracionCursosComponent } from './modules/panel-administracion-cursos/panel-administracion-cursos.component';
import { PanelAdministracionContactosComponent } from './modules/panel-administracion-contactos/panel-administracion-contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ProyectosComponent,
    ContactoComponent,
    nombreDirective,
    empresaDirective,
    correoDirective,
    SobreMiComponent,
    PanelAdministracionComponent,
    PanelAdministracionInicioComponent,
    PanelAdministracionProyectosComponent,
    PanelAdministracionEstudiosComponent,
    PanelAdministracionTrabajosComponent,
    PanelAdministracionCursosComponent,
    PanelAdministracionContactosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
