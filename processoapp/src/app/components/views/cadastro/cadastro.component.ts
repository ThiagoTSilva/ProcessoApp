import { Component, OnInit } from '@angular/core';
import { BeneficiarioService } from '../../services/beneficiario.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private beneficiarioService: BeneficiarioService) { }

  ngOnInit(): void {
  }

  createBeneficiario() : void {
     
  }
}
