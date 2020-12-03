import { Component, OnInit } from '@angular/core';
import { BeneficiarioService } from '../../services/beneficiario.service';
import { Beneficiario } from '../../model/beneficiario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  beneficiario : Beneficiario = {
      Nome:"",
      Matricula: "",
      Cpf:"",
      Orgao:"",
  }

  constructor(private beneficiarioService: BeneficiarioService) { }

  ngOnInit(): void {
  }

  createBeneficiario() : void {
    this.beneficiarioService.create(this.beneficiario).subscribe(() => {
      this.beneficiarioService.showOnConsole("Servidor salvo com sucesso");
    });
  }
}
