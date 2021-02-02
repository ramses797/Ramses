import { Component, OnInit } from '@angular/core';
import { InicioService } from 'src/app/modules/inicio/services/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  inicios = this.inicioService.read();

  constructor(private inicioService: InicioService) {}

  ngOnInit(): void {
  }
}
