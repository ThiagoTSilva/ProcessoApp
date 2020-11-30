import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
// import { CadastroComponent } from './components/views/cadastro/cadastro.component';
import { BeneficioComponent } from './components/views/beneficio/beneficio.component';
import { MovimentacaoComponent } from './components/views/movimentacao/movimentacao.component';
import { AnexarDocumentoComponent } from './components/views/beneficio/anexar-documento/anexar-documento.component';
import { ProcessoComponent } from './components/views/processo/processo.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  // {
  //   path:"cadastro",
  //   component:  CadastroComponent
  // },
  {
    path:"beneficio",
    component: BeneficioComponent
  },
  {
    path:"movimentacao",
    component: MovimentacaoComponent
  },
  {
    path:"beneficio/anexar-documento",
    component: AnexarDocumentoComponent
  },
  {
    path:"processo",
    component: ProcessoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
