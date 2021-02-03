import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Contacto } from 'src/app/modules/contacto/models/contacto';

@Injectable({
    providedIn: 'root'
})

export class ContactoService extends CrudService<Contacto> {

    constructor(http: HttpClient) {
        super(http);
        this.withUrlPrefix(PREFIX.contacto);
    }

    create(item: Contacto): void {
        this.insert(item).subscribe();
    }

    eliminar(item: Contacto) {
        this.delete(item).subscribe();
    }

}