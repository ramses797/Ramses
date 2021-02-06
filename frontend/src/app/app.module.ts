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
    PanelAdministracionComponent
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
