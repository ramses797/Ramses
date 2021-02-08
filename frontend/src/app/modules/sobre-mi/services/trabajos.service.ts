import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Trabajos } from 'src/app/modules/sobre-mi/models/trabajos';

@Injectable({
    providedIn: 'root'
})
export class TrabajosService extends CrudService<Trabajos> {

    constructor(http: HttpClient) {
        super(http);
        this.withUrlPrefix(PREFIX.trabajos);
    }

    insertar(item: Trabajos) {
        this.insert(item).subscribe();
    }

    read(): Observable<Trabajos[]> {
        return this.get();
    }

    modificar(item: Trabajos) {
        this.update(item).subscribe();
    }

    eliminar(item: Trabajos) {
        this.delete(item).subscribe();
    }
}