import { Component, OnInit } from '@angular/core';
import { Beneficio } from '../../model/beneficio.model';
import { ProcessoService } from '../../services/processo.service';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit {

  beneficio : Beneficio = {
    beneficiario : {
      Matricula : "",
      Cpf: '',
      Nome: '',
      Orgao:''
    },
    DescricaoTipoBeneficio: ''
}

  constructor(private processoService : ProcessoService) { }

  ngOnInit(): void {
  }

  search() : void {
    this.processoService.read(this.beneficio).subscribe(
      data => { 
            window.open(this.returnBlob(data));
    })
  }

  returnBlob(data: string){
    var pdfInBase64 = new Uint8Array(atob('iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==').split('').map(char => char.charCodeAt(0)));
    var file = new Blob([pdfInBase64], {type: 'application/pdf'});

    console.log(file)
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file);
    }
    
    return window.URL.createObjectURL(file);
  }

}
