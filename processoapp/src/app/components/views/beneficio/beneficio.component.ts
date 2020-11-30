import { Component, OnInit } from '@angular/core';
import { Beneficio } from '../../model/beneficio.model';
import { BeneficioService } from '../../services/beneficio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beneficio',
  templateUrl: './beneficio.component.html',
  styleUrls: ['./beneficio.component.css']
})
export class BeneficioComponent implements OnInit {

 servidor! : Beneficio;

  beneficio : Beneficio = {
      beneficiario : {
        Matricula : '',
        Cpf: '',
        Nome: '',
        Orgao:''
      },
      DescricaoTipoBeneficio: ''
  }

  constructor(private beneficioService : BeneficioService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createBeneficio() : void {
    this.beneficioService.create(this.beneficio).subscribe(() => {
      this.beneficioService.showOnConsole("Beneficio salvo com sucesso");
      this.router.navigate(["/beneficio/anexar-documento"])
    });
  }

  buscarBeneficio() : void {
    this.beneficioService.read(this.beneficio).subscribe( response =>{
        this.servidor = response
    })
  }

}
