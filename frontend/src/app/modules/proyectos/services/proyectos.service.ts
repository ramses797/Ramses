import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Proyectos } from 'src/app/modules/proyectos/models/proyectos';

@Injectable({
    providedIn: 'root'
})

export class ProyectosService extends CrudService<Proyectos> {

    constructor(http: HttpClient) {
        super(http);
        this.withUrlPrefix(PREFIX.proyectos);
    }

    read(): Observable<Proyectos[]> {
        return this.get();
    }
}