import { Component } from '@angular/core';
import { Contacto } from '../contacto/models/contacto';
import { ContactoService } from '../contacto/services/contacto.service';

@Component({
  selector: 'app-panel-administracion-contactos',
  templateUrl: './panel-administracion-contactos.component.html',
  styleUrls: ['./panel-administracion-contactos.component.scss']
})
export class PanelAdministracionContactosComponent {
  contactos = this.contactoService.read();
  contacto: Contacto = {nombre: '', empresa: '', correo: '', explicacion: '', terminos: true};
  accion = 'inicios';
  constructor(private contactoService: ContactoService) { }

  pasarLeer(objeto: Contacto): void {
    this.contacto = objeto;
    this.accion = 'leer';
  }

  eliminarContacto(objeto: Contacto): void {
    console.log(objeto);
    this.contactoService.eliminar(objeto._id);
    location.href = '/panelAdministracionContacto';
  }

}
