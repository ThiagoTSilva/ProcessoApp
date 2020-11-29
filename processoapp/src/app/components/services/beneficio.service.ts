import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Beneficio } from '../model/beneficio.model';

@Injectable({
    providedIn: 'root'
})

export class BeneficioService{

    baseUrl = 'http://localhost:52670/api/'

    constructor(private snackBar: MatSnackBar,
                private http: HttpClient){}

    showOnConsole(msg: string) : void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: 'top'
        })
    }
    

    create(beneficio : Beneficio): Observable<Beneficio>{
        return this.http.post<Beneficio>( this.baseUrl + "cadastrar-beneficio", beneficio)
    }

    read(beneficio: Beneficio) : Observable<Beneficio>{
        return this.http.get<Beneficio>(this.baseUrl + "beneficiario/" + beneficio.beneficiario.Matricula)
    }

}