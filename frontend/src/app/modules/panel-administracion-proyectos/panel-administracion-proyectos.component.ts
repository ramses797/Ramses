import { Component } from '@angular/core';
import { Proyectos } from '../proyectos/models/proyectos';
import { ProyectosService } from '../proyectos/services/proyectos.service';

@Component({
  selector: 'app-panel-administracion-proyectos',
  templateUrl: './panel-administracion-proyectos.component.html',
  styleUrls: ['./panel-administracion-proyectos.component.scss']
})
export class PanelAdministracionProyectosComponent {
  proyectos = this.proyectosService.read();
  proyecto: Proyectos;
  accion = 'inicios';

  constructor(private proyectosService: ProyectosService) {
    this.proyecto = {nombreProyecto: '', empresa: '', tecnologias: ''};
  }

  anyadirProyecto(): void {
    this.proyectosService.insertar(this.proyecto);
    this.proyectos = this.proyectosService.read();
    this.accion = 'inicios';
  }

  modificarProyecto(): void {
    console.log(this.proyectos);
    this.proyectosService.modificar(this.proyecto);
    this.proyecto = {nombreProyecto: '', empresa: '', tecnologias: ''};
    this.accion = 'inicios';
  }
  pasarModificar(objeto: Proyectos): void {
    this.proyecto = objeto;
    this.accion = 'modificar';
  }
  eliminarProyecto(objeto: Proyectos): void {
    this.proyectosService.eliminar(objeto._id);
    location.href = '/panelAdministracionProyectos';
  }
}
