import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASEURL } from 'src/app/modules/shared/config/webApiPrefix.config';

@Injectable()
export class CrudService<T> {
    apiRest: string;

    constructor(private http: HttpClient){}

    withUrlPrefix(urlPrefix: string): void {
        this.setUrlPrefix(urlPrefix);
    }

    insert(item: T): Observable<T> {
        return this.http.post<T>(`${this.apiRest}/insert`, item);
    }

    get(): Observable<T[]> {
        return this.http.get<T[]>(`${this.apiRest}/get`);
    }

    getById(id: string): Observable<T> {
        return this.http.get<T>(`${this.apiRest}/getOneById/${id}`);
    }

    update(id: string, item: T): Observable<T> {
        return this.http.put<T>(`${this.apiRest}/update/${id}`, item);
    }

    delete(itemId: string): Observable<T> {
        return this.http.delete<T>(`${this.apiRest}/delete/${itemId}`);
    }

    userLogin(item: T): Observable<T> {
        return this.http.post<T>(`${this.apiRest}/login/`, item);
    }

    private setUrlPrefix(urlPrefix: string): void {
        this.apiRest = `${BASEURL}/${urlPrefix}`;
    }
}
