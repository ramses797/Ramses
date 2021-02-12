import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto/models/contacto';
import { ContactoService } from '../contacto/services/contacto.service';

@Component({
  selector: 'app-panel-administracion-contactos',
  templateUrl: './panel-administracion-contactos.component.html',
  styleUrls: ['./panel-administracion-contactos.component.scss']
})
export class PanelAdministracionContactosComponent implements OnInit {
  contactos = this.contactoService.read();
  contacto: Contacto = {nombre: '', empresa: '', correo: '', explicacion: '', terminos: true};
  accion: string = 'inicios'
  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
  }

  pasarLeer(objeto: Contacto) {
    this.contacto = objeto;
    this.accion = 'leer';
  }

  eliminarContacto(objeto: Contacto) {
    console.log(objeto);
    this.contactoService.eliminar(objeto._id);
    location.href = '/panelAdministracionContacto';
  }

}
