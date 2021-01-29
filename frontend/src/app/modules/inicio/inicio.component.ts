import { Component, OnInit } from '@angular/core';
import { Inicio } from 'src/app/modules/inicio/models/inicio';
import { InicioService } from 'src/app/modules/inicio/services/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  inicio: Inicio;
  inicios = this.inicioService.read();

  constructor(private inicioService: InicioService) { 
    this.inicio = {
      titulo: 'aaaaa',
      subtitulo: 'bbbb',
      explicacionPersonal: 'cccccccc'
    }
  }

  ngOnInit(): void {
    console.log(this.inicios);
  }

}
