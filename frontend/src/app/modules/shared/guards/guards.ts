import { Injectable } from '@angular/core';
import {  Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/services/login.service';

@Injectable({
    providedIn: 'root'
})
export class Guards implements CanActivate {

    constructor(
        //Eliminar router y LoginService ya que no se estan usando.
        private router: Router,
        private loginService: LoginService
        ) { }

        canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
            //Eliminar identidad y hacer el if directamente de localStorage.
            const identidad = localStorage.getItem('usuario')
            if(identidad === 'rmorenor97@gmail.com') {
                return true;
            }else {
                location.href = 'inicio';
            }
            return false;
        }
}