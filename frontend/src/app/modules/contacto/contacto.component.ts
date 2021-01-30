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
      nombre: 'ramses',
      empresa: 'EncoderApe',
      correo: 'rmorenor97@gmail.com',
      explicacion: 'shdfhadkjhfasjhdgfjdh',
      terminos: true
    };
  }

  ngOnInit(): void {
    
    this.contactoService.create(this.contacto);
  }

}
