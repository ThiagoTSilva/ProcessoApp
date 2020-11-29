import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Documento } from '../model/documento.model';


@Injectable({
    providedIn: 'root'
})

export class AnexarArquivoService{

    baseUrl= "http://localhost:52670/api/anexar-documentos";

    constructor(private snackBar: MatSnackBar, private http: HttpClient){}

    showOnConsole(msg: string) : void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: 'top'
        })
    }
    

    create(documento : Documento): Observable<Documento>{
        return this.http.post<Documento>(this.baseUrl, documento)
    }

}