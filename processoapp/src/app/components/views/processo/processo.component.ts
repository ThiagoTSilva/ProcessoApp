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
      Matricula : 0,
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

  returnBlob(data: BlobPart){
    var file = new Blob([data], {type: 'application/pdf'});
    var url = window.URL.createObjectURL(file);
    console.log(url)
    return url;
  }

}
