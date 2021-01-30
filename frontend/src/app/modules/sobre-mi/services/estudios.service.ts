import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Estudios } from 'src/app/modules/sobre-mi/models/estudios';

@Injectable({
    providedIn: 'root'
})
export class EstudiosService extends CrudService<Estudios> {

    constructor(http: HttpClient) {
        super(http);
        this.withUrlPrefix(PREFIX.estudios);
    }

    read(): Observable<Estudios[]> {
        return this.get();
    }
}