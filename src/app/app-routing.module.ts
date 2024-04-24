import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { InternaComponent } from './component/interna/interna.component';
import { BuscaComponent } from './component/busca/busca.component';
import { ImoveisComponent } from './component/crud/imoveis/imoveis.component';
import { CreateComponent } from './component/crud/create/create.component';
import { CriarTiposComponent } from './component/crud/criar-tipos/criar-tipos.component';
import { CriarCidadeComponent } from './component/crud/criar-cidade/criar-cidade.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'interna/:id', component: InternaComponent },
  { path: 'busca', component: BuscaComponent },
  { path: 'crud/imoveis', component: ImoveisComponent },
  { path: 'crud/imoveis/criar', component: CreateComponent },
  { path: 'crud/imoveis/criar/tipos', component: CriarTiposComponent },
  { path: 'crud/imoveis/criar/cidades', component: CriarCidadeComponent},
 



  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
