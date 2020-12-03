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


  constructor(private anexarArquivoService: AnexarArquivoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createAnexo() {
    this.anexarArquivoService.create(this.documento).subscribe(() => {
      this.anexarArquivoService.showOnConsole("Item anexado com sucesso. ");
      this.router.navigate(["/beneficio"])
    });
  }

  onChange(event: any) {
    const files = event.target.files[0];
    this.getBase64(files).then(
      data => {
          console.log(data);
      });
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