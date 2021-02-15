import { Component, OnInit } from '@angular/core';
import { Cursos } from '../sobre-mi/models/cursos';
import { CursosService } from '../sobre-mi/services/cursos.service';

@Component({
  selector: 'app-panel-administracion-cursos',
  templateUrl: './panel-administracion-cursos.component.html',
  styleUrls: ['./panel-administracion-cursos.component.scss']
})
export class PanelAdministracionCursosComponent implements OnInit {
  cursos = this.cursosService.read();
  curso: Cursos = {titulo: '', aprendizaje: ''};
  accion: string = 'inicios';

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
  }

  anyadirCurso() {
    this.cursosService.insertar(this.curso);
    this.cursos = this.cursosService.read();
    this.accion = 'inicios';
  }

  modificarCurso() {
    this.cursosService.modificar(this.curso);
    this.curso = {titulo: '', aprendizaje: ''};
    this.accion = 'inicios';
  }
  pasarModificar(objeto: Cursos) {
    this.curso = objeto;
    this.accion = 'modificar';
  }
  eliminarCurso(objeto: Cursos) {
    console.log(objeto);
    this.cursosService.eliminar(objeto._id);
    //location.href = '/panelAdministracionCursos';
  }

}
