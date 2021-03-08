import { Component } from '@angular/core';
import { Trabajos } from '../sobre-mi/models/trabajos';
import { TrabajosService } from '../sobre-mi/services/trabajos.service';

@Component({
  selector: 'app-panel-administracion-trabajos',
  templateUrl: './panel-administracion-trabajos.component.html',
  styleUrls: ['./panel-administracion-trabajos.component.scss']
})
export class PanelAdministracionTrabajosComponent {
  trabajos = this.trabajosService.read();
  trabajo: Trabajos;
  accion = 'inicios';

  constructor(private trabajosService: TrabajosService) {
    this.trabajo = {fechaInicio: '', fechaFin: '', localizacion: '', institucion: '', puesto: '', tareas: ''};
  }

  anyadirTrabajo(): void {
    this.trabajosService.insertar(this.trabajo);
    this.trabajos = this.trabajosService.read();
    this.accion = 'inicios';
  }

  modificarTrabajo(): void {
    this.trabajosService.modificar(this.trabajo._id, this.trabajo);
    this.trabajo = {fechaInicio: '', fechaFin: '', localizacion: '', institucion: '', puesto: '', tareas: ''};
    this.accion = 'inicios';
  }
  pasarModificar(objeto: Trabajos): void {
    this.trabajo = objeto;
    this.accion = 'modificar';
  }
  eliminarTrabajo(objeto: Trabajos): void {
    console.log(objeto);
    this.trabajosService.eliminar(objeto._id);
    location.href = '/panelAdministracionTrabajos';
  }

}
