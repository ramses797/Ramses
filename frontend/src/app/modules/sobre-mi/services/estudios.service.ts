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

    insertar(item: Estudios): void {
        this.insert(item).subscribe();
    }

    read(): Observable<Estudios[]> {
        return this.get();
    }

  // TODO: MODIFICAR(ITEMID: STRING, ITEM: CURSOS)
    modificar(item: Estudios): void {
        this.update(item._id, item).subscribe();
    }

    eliminar(itemId: string): void {
        this.delete(itemId).subscribe();
    }
}
