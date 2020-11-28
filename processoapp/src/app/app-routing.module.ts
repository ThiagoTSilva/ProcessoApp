import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { CadastroComponent } from './components/views/cadastro/cadastro.component';
import { BeneficioComponent } from './components/views/beneficio/beneficio.component';
import { MovimentacaoComponent } from './components/views/movimentacao/movimentacao.component';

const routes: Routes = [
  {
    path:"",
    component:  HomeComponent
  },
  {
    path:"cadastro",
    component:  CadastroComponent
  },
  {
    path:"beneficio",
    component:  BeneficioComponent
  },
  {
    path:"movimentacao",
    component:  MovimentacaoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
