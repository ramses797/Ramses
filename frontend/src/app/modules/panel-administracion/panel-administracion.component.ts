import { Component, OnInit } from '@angular/core';
import { InicioService } from '../inicio/services/inicio.service';
import { ProyectosService } from '../proyectos/services/proyectos.service';
import { CursosService } from '../sobre-mi/services/cursos.service';
import { EstudiosService } from '../sobre-mi/services/estudios.service';
import { TrabajosService } from '../sobre-mi/services/trabajos.service';
import { ContactoService} from '../contacto/services/contacto.service';

@Component({
  selector: 'app-panel-administracion',
  templateUrl: './panel-administracion.component.html',
  styleUrls: ['./panel-administracion.component.scss']
})
export class PanelAdministracionComponent implements OnInit {
  inicios = this.inicioService.get();
  proyectos;
  cursos;
  estudios;
  trabajos;
  contactos;
  eleccionTipo: string = 'inicio';

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

}
