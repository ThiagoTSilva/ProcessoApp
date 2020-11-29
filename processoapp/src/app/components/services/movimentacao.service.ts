import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Movimentacao } from '../model/movimentacao.model';

@Injectable({
    providedIn: 'root'
})

export class MovimentacaoService{

    baseUrl = 'http://localhost:52670/api/'

    constructor(private snackBar: MatSnackBar, private http: HttpClient){}

    showOnConsole(msg: string) : void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: 'top'
        })
    }
    

    create(movimentacao : Movimentacao): Observable<Movimentacao>{
        return this.http.post<Movimentacao>(this.baseUrl + "movimentacao", movimentacao)
    }

    read(): Observable<Movimentacao>{
        return this.http.get<Movimentacao>(this.baseUrl + "movimentacao")
    }

}