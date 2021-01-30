import { Component, OnInit } from '@angular/core';
import { EstudiosService } from 'src/app/modules/sobre-mi/services/estudios.service';
import { TrabajosService } from 'src/app/modules/sobre-mi/services/trabajos.service';
import { CursosService } from 'src/app/modules/sobre-mi/services/cursos.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {
  estudio: string = 'estudios';
  trabajo: string = 'trabajos';
  curso: string = 'cursos';
  eleccion: string = 'estudios';

  estudios = this.estudiosService.read();
  trabajos = this.trabajosService.read();
  cursos = this.cursosService.read();

  constructor(private estudiosService: EstudiosService,
              private trabajosService: TrabajosService,
              private cursosService: CursosService
              ) { }

  ngOnInit(): void {}

  cambioVista(vista) {
    this.eleccion = vista;
    console.log(this.eleccion);
  }

}
