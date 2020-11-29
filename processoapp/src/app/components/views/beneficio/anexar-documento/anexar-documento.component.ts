import { Component, OnInit } from '@angular/core';
import { Documento } from "../../../model/documento.model";
import { AnexarArquivoService } from '../../../services/anexarArquivo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anexar-documento',
  templateUrl: './anexar-documento.component.html',
  styleUrls: ['./anexar-documento.component.css']
})
export class AnexarDocumentoComponent implements OnInit {

  documento: Documento = {
    Arquivo: '',
    Categoria: '',
    Matricula: ''
  }

  arraByte = []

  constructor(private anexarArquivoService: AnexarArquivoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createAnexo() {
    this.documento.Arquivo = this.arraByte[0]
    this.anexarArquivoService.create(this.documento).subscribe(() => {
      this.anexarArquivoService.showOnConsole("Anexo salvo com sucesso");
      this.router.navigate(["/beneficio"])
    });
  }

  onChange(event: { target: { files: any[]; }; }) {

    const files = event.target.files[0];
    this.getBase64(files).then(
      d => this.arraByte.push(d)
    );   
  }


   getBase64(file: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

}