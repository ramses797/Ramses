import { Component, OnInit } from '@angular/core';
import { Trabajos } from '../sobre-mi/models/trabajos';
import { TrabajosService } from '../sobre-mi/services/trabajos.service'; 

@Component({
  selector: 'app-panel-administracion-trabajos',
  templateUrl: './panel-administracion-trabajos.component.html',
  styleUrls: ['./panel-administracion-trabajos.component.scss']
})
export class PanelAdministracionTrabajosComponent implements OnInit {
  trabajos = this.trabajosService.read();
  trabajo: Trabajos;
  accion = 'inicios';

  constructor(private trabajosService: TrabajosService) { 
    this.trabajo = {fechaInicio: '', fechaFin: '', localizacion: '', institucion: '', puesto: '', tareas: ''};
  }

  ngOnInit(): void {
  }

  anyadirTrabajo() {
    this.trabajosService.insertar(this.trabajo);
    this.trabajos = this.trabajosService.read();
    this.accion = 'inicios';
  }

  modificarTrabajo() {
    this.trabajosService.modificar(this.trabajo);
    this.trabajo = {fechaInicio: '', fechaFin: '', localizacion: '', institucion: '', puesto: '', tareas: ''};
    this.accion = 'inicios';
  }
  pasarModificar(objeto: Trabajos) {
    this.trabajo = objeto;
    this.accion = 'modificar';
  }
  eliminarTrabajo(objeto: Trabajos) {
    console.log(objeto);
    this.trabajosService.eliminar(objeto._id);
    location.href = '/panelAdministracionTrabajos';
  }

}
