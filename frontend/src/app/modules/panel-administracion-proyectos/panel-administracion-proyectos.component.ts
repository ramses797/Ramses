import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../proyectos/models/proyectos';
import { ProyectosService } from '../proyectos/services/proyectos.service';

@Component({
  selector: 'app-panel-administracion-proyectos',
  templateUrl: './panel-administracion-proyectos.component.html',
  styleUrls: ['./panel-administracion-proyectos.component.scss']
})
export class PanelAdministracionProyectosComponent implements OnInit {
  proyectos = this.proyectosService.read();
  proyecto: Proyectos;
  accion: string = 'inicios'

  constructor(private proyectosService: ProyectosService) { 
    this.proyecto = {nombreProyecto: '', empresa: '', tecnologias: ''};
  }

  ngOnInit(): void {
  }

  anyadirProyecto() {
    this.proyectosService.insertar(this.proyecto);
    this.proyectos = this.proyectosService.read();
    this.accion = 'inicios';
  }

  modificarProyecto() {
    console.log(this.proyectos);
    this.proyectosService.modificar(this.proyecto);
    this.proyecto = {nombreProyecto: '', empresa: '', tecnologias: ''};
    this.accion = 'inicios';
  }
  pasarModificar(objeto: Proyectos) {
    this.proyecto = objeto;
    this.accion = 'modificar';
  }
  eliminarProyecto(objeto: Proyectos) {
    this.proyectosService.eliminar(objeto._id);
    location.href = '/panelAdministracionProyectos';
  }

}
