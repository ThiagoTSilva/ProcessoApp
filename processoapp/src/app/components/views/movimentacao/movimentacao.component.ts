import { Component, OnInit } from '@angular/core';
import { Movimentacao } from '../../model/movimentacao.model';
import { MovimentacaoService } from '../../services/movimentacao.service'

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {
  displayedColumns = ['dataTramitacao','origem','destino','usuario','acao'];

  movimentacao : Movimentacao = {
    Destino: '',
    Origem: '',
    Acao:'',
    UsuarioId: 0,
    DataTramitacao: ''
  }

  pesquisa: Movimentacao = {
    Destino: '',
    Origem: '',
    Acao:'',
    UsuarioId: 0,
    DataTramitacao: ''
  }

  constructor(private movimentacaoService : MovimentacaoService) { }

  ngOnInit(): void {
  }

  createMovimentacao() : void {
    this.movimentacaoService.create(this.movimentacao).subscribe(() => {
      this.movimentacaoService.showOnConsole("Movimentação criada com sucesso.");
    });
  }

  search() : void {
    this.movimentacaoService.read().subscribe( response => {
      this.pesquisa = response

    });
  }

}
