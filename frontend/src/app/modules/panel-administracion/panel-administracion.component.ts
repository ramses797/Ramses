import { Component, OnInit } from '@angular/core';
import { Inicio } from '../inicio/models/inicio';
import { InicioService } from '../inicio/services/inicio.service';
import { Proyectos } from '../proyectos/models/proyectos';
import { ProyectosService } from '../proyectos/services/proyectos.service';
import { Estudios } from '../sobre-mi/models/estudios';
import { EstudiosService } from '../sobre-mi/services/estudios.service';
import { Trabajos } from '../sobre-mi/models/trabajos';
import { TrabajosService } from '../sobre-mi/services/trabajos.service';
import { Cursos } from '../sobre-mi/models/cursos';
import { CursosService } from '../sobre-mi/services/cursos.service';
import { ContactoService} from '../contacto/services/contacto.service';

@Component({
  selector: 'app-panel-administracion',
  templateUrl: './panel-administracion.component.html',
  styleUrls: ['./panel-administracion.component.scss']
})
export class PanelAdministracionComponent implements OnInit {
  inicios = this.inicioService.get();
  inicio: Inicio = {titulo:'', subtitulo: '', explicacionPersonal: ''};
  proyectos;
  proyecto: Proyectos = {nombreProyecto: '', empresa: '', tecnologias: ''};
  estudios;
  estudio: Estudios = {fechaInicio: '', fechaFin: '', localizacion: '', centro: '', titulo: '', aprendizaje: ''};
  trabajos;
  trabajo: Trabajos = {fechaInicio: '', fechaFin: '', localizacion: '', institucion: '', puesto: '', tareas: ''};
  cursos;
  curso: Cursos = {titulo: '', aprendizaje: ''};
  contactos;
  eleccionTipo: string = 'inicio';
  eleccionModificar: string = '';

  constructor(
    private inicioService: InicioService,
    private proyectosService: ProyectosService,
    private cursosService: CursosService,
    private estudioService: EstudiosService,
    private trabajosService: TrabajosService,
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void {
  }

  insertarDatos() {
    if(this.eleccionTipo == 'inicioAñadir') {
      this.inicioService.insertar(this.inicio);
      this.eleccionTipo = 'inicio';
    } else if(this.eleccionTipo == 'proyectosAñadir') {
      this.proyectosService.insertar(this.proyecto);
      this.eleccionTipo = 'proyectos';
    } else if(this.eleccionTipo == 'estudiosAñadir') {
      this.estudioService.insertar(this.estudio);
      this.eleccionTipo = 'estudios';
    } else if(this.eleccionTipo == 'trabajosAñadir') {
      this.trabajosService.insertar(this.trabajo);
      this.eleccionTipo = 'trabajos';
    } else if(this.eleccionTipo == 'cursosAñadir') {
      this.cursosService.insertar(this.curso);
      this.eleccionTipo = 'cursos';
    }
  }

  recogerDatos(tipo: string) {
    this.eleccionTipo = tipo;
    if(this.eleccionTipo == 'inicio') {
      this.inicios = this.inicioService.get();
    } else if(this.eleccionTipo == 'proyectos') {
      this.proyectos = this.proyectosService.get();
    } else if(this.eleccionTipo == 'estudios') {
      this.estudios = this.estudioService.get();
    } else if(this.eleccionTipo == 'trabajos') {
      this.trabajos = this.trabajosService.get();
    }else if(this.eleccionTipo == 'cursos') {
      this.cursos = this.cursosService.get();
    }else if(this.eleccionTipo == 'contactos') {
      this.contactos = this.contactoService.get();
    }
  }

  modificarDatos(objeto) {
    if(this.eleccionTipo == 'inicio') {
      this.inicioService.modificar(objeto);
    } else if(this.eleccionTipo == 'proyectos') {
      this.proyectosService.modificar(objeto);
    } else if(this.eleccionTipo == 'estudios') {
      this.estudioService.modificar(objeto);
    } else if(this.eleccionTipo == 'trabajos') {
      this.trabajosService.modificar(objeto);
    }else if(this.eleccionTipo == 'cursos') {
      this.cursosService.modificar(objeto);
    }else if(this.eleccionTipo == 'contactos') {
      this.contactoService.modificar(objeto);
    }
    this.eleccionModificar = '';
  }

  eliminarProyecto(objeto: Proyectos) {
    console.log(objeto);
    this.proyectosService.eliminar(objeto);
  }

  eliminarDatos(objeto) {
    if(this.eleccionTipo == 'inicio') {
      this.inicioService.eliminar(objeto);
    } else if(this.eleccionTipo == 'proyectos') {
      this.proyectosService.eliminar(objeto);
    } else if(this.eleccionTipo == 'estudios') {
      this.estudioService.eliminar(objeto);
    } else if(this.eleccionTipo == 'trabajos') {
      this.trabajosService.eliminar(objeto);
    }else if(this.eleccionTipo == 'cursos') {
      this.cursosService.eliminar(objeto);
    }else if(this.eleccionTipo == 'contactos') {
      this.contactoService.eliminar(objeto);
    }
  }

}
