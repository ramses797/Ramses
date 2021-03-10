import { Component } from '@angular/core';
import { Estudios } from '../sobre-mi/models/estudios';
import { EstudiosService } from '../sobre-mi/services/estudios.service';
@Component({
  selector: 'app-panel-administracion-estudios',
  templateUrl: './panel-administracion-estudios.component.html',
  styleUrls: ['./panel-administracion-estudios.component.scss']
})
export class PanelAdministracionEstudiosComponent {
  estudios = this.estudiosService.read();
  estudio: Estudios;
  accion = 'inicios';
  constructor(private estudiosService: EstudiosService) {
    this.estudio = {fechaInicio: '', fechaFin: '', localizacion: '', centro: '', titulo: '', aprendizaje: ''};
  }

  anyadirEstudio(): void {
    this.estudiosService.insertar(this.estudio);
    this.estudios = this.estudiosService.read();
    this.accion = 'inicios';
  }

  modificarEstudio(): void {
    console.log(this.estudios);
    this.estudiosService.modificar(this.estudio._id, this.estudio);
    this.estudio = {fechaInicio: '', fechaFin: '', localizacion: '', centro: '', titulo: '', aprendizaje: ''};
    this.accion = 'inicios';
  }
  pasarModificar(objeto: Estudios): void {
    this.estudio = objeto;
    this.accion = 'modificar';
  }
  eliminarEstudio(objeto: Estudios): void {
    console.log(objeto);
    this.estudiosService.eliminar(objeto._id);
    location.href = '/panelAdministracionEstudios';
  }
}
