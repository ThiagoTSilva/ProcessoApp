import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beneficio } from '../model/beneficio.model';

@Injectable({
    providedIn: 'root'
})

export class ProcessoService{

    baseUrl = 'http://localhost:52670/api/'

    constructor(private http: HttpClient){}

    read(beneficio: Beneficio) : Observable<any>{
        return this.http.get(this.baseUrl + beneficio.beneficiario.Matricula + "/buscar-documento",
        { responseType: 'arraybuffer' })
    }

}