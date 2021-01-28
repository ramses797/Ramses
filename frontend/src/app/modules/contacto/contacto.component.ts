import { Component, OnInit } from '@angular/core';
import { Contacto } from './models/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  contacto: Contacto;

  constructor() { 
    this.contacto = {
      nombre: '',
      empresa: '',
      correo: '',
      explicacion: '',
      terminos: false
    };
  }

  ngOnInit(): void {
  }

}
