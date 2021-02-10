import { Component, OnInit } from '@angular/core';
import { Inicio } from '../inicio/models/inicio';
import { InicioService } from '../inicio/services/inicio.service';

@Component({
  selector: 'app-panel-administracion-inicio',
  templateUrl: './panel-administracion-inicio.component.html',
  styleUrls: ['./panel-administracion-inicio.component.scss']
})
export class PanelAdministracionInicioComponent implements OnInit {
  inicios = this.inicioService.read();
  inicioAcciones: Inicio;
  accion: string = 'inicio';
  

  constructor(private inicioService: InicioService) { 
    this.inicioAcciones = {titulo: '', subtitulo: '', explicacionPersonal: ''};
  }

  ngOnInit(): void {
  }

  anyadirInicio() {
    this.inicioService.insertar(this.inicioAcciones);
    this.inicios = this.inicioService.read();
    this.accion = 'inicio';
  }

  modificarInicio() {
    console.log(this.inicioAcciones);
    this.inicioService.modificar(this.inicioAcciones);
    this.inicioAcciones = {titulo: '', subtitulo: '', explicacionPersonal: ''}
    this.accion = 'inicio';
  }
  pasarModificar(objeto: Inicio) {
    this.inicioAcciones = objeto;
    this.accion = 'modificar';
  }
  eliminarInicio(objeto: Inicio) {
    console.log(objeto);
    this.inicioService.eliminar(objeto._id);
    location.href = '/panelAdministracionInicio';
  }
}
