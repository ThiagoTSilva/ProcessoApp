import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Beneficiario } from '../model/beneficiario.model';

@Injectable({
    providedIn: 'root'
})

export class BeneficiarioService{

    baseUrl = 'http://localhost:52670/api/'

    constructor(private snackBar: MatSnackBar, private http: HttpClient){}

    showOnConsole(msg: string) : void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: 'top'
        })
    }
    

    create(beneficiario : Beneficiario): Observable<Beneficiario>{
        return this.http.post<Beneficiario>(this.baseUrl, beneficiario)
    }

}