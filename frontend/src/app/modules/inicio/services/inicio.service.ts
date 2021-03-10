import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Inicio } from 'src/app/modules/inicio/models/inicio';

@Injectable({
    providedIn: 'root'
})
export class InicioService extends CrudService<Inicio>{

    constructor(http: HttpClient) {
        super(http);
        this.withUrlPrefix(PREFIX.inicio);
    }

    insertar(item: Inicio) {
        this.insert(item).subscribe();
    }

    read(): Observable<Inicio[]> {
        return this.get();
    }

    modificar(item: Inicio) {
        this.update(item._id, item).subscribe();
    }

    eliminar(itemId: string) {
        this.delete(itemId).subscribe();
    }
    
}