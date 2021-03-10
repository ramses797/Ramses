import { Component } from '@angular/core';
import { Cursos } from '../sobre-mi/models/cursos';
import { CursosService } from '../sobre-mi/services/cursos.service';

@Component({
  selector: 'app-panel-administracion-cursos',
  templateUrl: './panel-administracion-cursos.component.html',
  styleUrls: ['./panel-administracion-cursos.component.scss']
})
export class PanelAdministracionCursosComponent {
  cursos = this.cursosService.read();
  curso: Cursos = {titulo: '', aprendizaje: ''};
  accion = 'inicios';

  constructor(private cursosService: CursosService) { }

  anyadirCurso(): void {
    this.cursosService.insertar(this.curso);
    this.cursos = this.cursosService.read();
    this.accion = 'inicios';
  }

  modificarCurso(): void {
    this.cursosService.modificar(this.curso._id, this.curso);
    this.curso = {titulo: '', aprendizaje: ''};
    this.accion = 'inicios';
  }
  pasarModificar(objeto: Cursos): void {
    this.curso = objeto;
    this.accion = 'modificar';
  }
  eliminarCurso(objeto: Cursos): void {
    console.log(objeto);
    this.cursosService.eliminar(objeto._id);
    location.href = '/panelAdministracionCursos';
  }

}
