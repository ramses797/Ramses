import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/modules/proyectos/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  proyectos = this.proyectosService.read();

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
  }

}
