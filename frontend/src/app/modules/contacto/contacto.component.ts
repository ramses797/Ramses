import { Component, OnInit } from '@angular/core';
import { Contacto } from './models/contacto';
import { ContactoService } from './services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  contacto: Contacto;

  constructor(private contactoService: ContactoService) { 
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

  anyadirContacto() {
      this.contactoService.create(this.contacto);
  }

}
