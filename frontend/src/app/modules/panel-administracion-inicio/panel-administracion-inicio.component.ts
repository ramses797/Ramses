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
  inicio: Inicio;
  accion: string = 'inicios';
  

  constructor(private inicioService: InicioService) { 
    this.inicio = {titulo: '', subtitulo: '', explicacionPersonal: ''};
  }

  ngOnInit(): void {
  }

  anyadirInicio() {
    this.inicioService.insertar(this.inicio);
    this.inicios = this.inicioService.read();
    this.accion = 'inicios';
  }

  modificarInicio() {
    console.log(this.inicio);
    this.inicioService.modificar(this.inicio);
    this.inicio = {titulo: '', subtitulo: '', explicacionPersonal: ''}
    this.accion = 'inicios';
  }
  pasarModificar(objeto: Inicio) {
    this.inicio = objeto;
    this.accion = 'modificar';
  }
  eliminarInicio(objeto: Inicio) {
    this.inicioService.eliminar(objeto._id);
    location.href = '/panelAdministracionInicio';
  }
}
