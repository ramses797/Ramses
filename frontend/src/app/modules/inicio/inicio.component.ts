import { Component, OnInit } from '@angular/core';
import { Inicio } from 'src/app/modules/inicio/models/inicio'
import { InicioService } from 'src/app/modules/inicio/services/inicio.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  inicio: Inicio;
  //inicios = this.inicioService.get();

  constructor(private inicioService: InicioService) { 
    this.inicio = {
      titulo: 'aaaaa',
      subtitulo: 'bbbb',
      explicacionPersonal: 'cccccccc'
    }
  }

  ngOnInit(): void {
    //this.insertarInicio(this.inicio);
    //console.log(this.inicios);
  }

  /*private insertarInicio(item){
    this.inicioService.insert(item);
  }*/
  /*private leerInicio(): void {
    console.log(this.inicioService.get());
  }*/

}
