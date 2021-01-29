import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {
  estudios: string = 'estudios';
  trabajos: string = 'trabajos';
  cursos: string = 'cursos';
  eleccion: string = 'estudios';

  constructor() { }

  ngOnInit(): void {
  }

  cambioVista(vista) {
    this.eleccion = vista;
    console.log(this.eleccion);
  }

}
