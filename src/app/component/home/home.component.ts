import { Component, OnInit } from '@angular/core';
import { ConteudoSite } from 'src/app/model/conteudoSite/conteudo-site';
import { Imoveis } from 'src/app/model/imoveis/imoveis';
import { Tipos } from 'src/app/model/tipos/tipos';
import { GeralService } from 'src/app/service/geral.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
buscaDestaque : ConteudoSite = new ConteudoSite()
imovel: Imoveis[] = []
tipos:Tipos[] = [] 

busca: FormGroup = new FormGroup({
  comprarAlugar: new FormControl(''),
  quartos: new FormControl(''),
  banheiros: new FormControl(''),
  vagas: new FormControl(''),
  tipo: new FormControl(''),
  localizacao: new FormControl(''),
  tipoDaBusca: new FormControl('')
})

  constructor(
    private apiGeral: GeralService,
    private route: Router,
  ){}
  ngOnInit(): void {
      this.buscaImoveis()
      this.pegaImoveis()
      this.pegaTipos()
      this.pegaLocalstorage()

  }

  buscaImoveis(){
    this.apiGeral.getBusca().subscribe( (busca) => {
      this.buscaDestaque = busca
    })
  }  
  pegaImoveis(): void{
    this.apiGeral.getImoveis().subscribe( (imoveis) => {
      this.imovel = imoveis
    })
  }
pegaTipos(): void{
    this.apiGeral.getTipos().subscribe( (tipos) => {
      this.tipos = tipos
    })  
  }

  pesquisarImovel(): void{

    let stringFiltro = ''
    let stringFiltroAmbos = ''

    if(this.busca.value.banheiros){
      stringFiltro += `banheiros=${this.busca.value.banheiros}&`
      stringFiltroAmbos += `banheiros=${this.busca.value.banheiros}&`
    }
    if(this.busca.value.comprarAlugar){
      stringFiltro += `tipoDeVenda=${this.busca.value.comprarAlugar}&`
      stringFiltroAmbos += `tipoDeVenda=ambos&`
    }
    if(this.busca.value.quartos){
      stringFiltro += `quartos=${this.busca.value.quartos}&`
      stringFiltroAmbos += `quartos=${this.busca.value.quartos}&`
    }
    if(this.busca.value.vagas){
      stringFiltro += `vagas=${this.busca.value.vagas}&`
      stringFiltroAmbos += `vagas=${this.busca.value.vagas}&`
    }
    if(this.busca.value.tipo){
      stringFiltro += `tipoImovel=${this.busca.value.tipo}&`
      stringFiltroAmbos += `tipoImovel=${this.busca.value.tipo}&`
    }

    if(this.busca.value.tipoDaBusca){
      if(this.busca.value.tipoDaBusca == 'cidade'){
        stringFiltro += `cidade=${this.busca.value.localizacao}&`
        stringFiltroAmbos += `cidade=${this.busca.value.localizacao}&`
      } else if(this.busca.value.tipoDaBusca == 'bairro'){
        stringFiltro += `bairro=${this.busca.value.localizacao}&`
        stringFiltroAmbos += `bairro=${this.busca.value.localizacao}&`
      }
    }

    this.imovel = []

    localStorage.setItem('strFiltro', stringFiltro)
    localStorage.setItem('strFiltroAmbos', stringFiltroAmbos)

    this.route.navigate(['/busca'])

    this.apiGeral.getImoveisFiltrados(stringFiltro).subscribe((resp) => {
      for(let imovel of resp){
        this.imovel.push(imovel)
      }
    })
    this.apiGeral.getImoveisFiltrados(stringFiltroAmbos).subscribe((resp) => {
      for(let imovel of resp){
        this.imovel.push(imovel)
      }
    })
  }

  pegaLocalstorage(): void{
    let infoLocal = localStorage.getItem('strFiltro')
    let infoLocalAmbos = localStorage.getItem('strFiltroAmbos')
    if(infoLocal && infoLocalAmbos){
      console.log('Tem localstorage')
      this.apiGeral.getImoveisFiltrados(infoLocal).subscribe((resp) => {
        for(let imovel of resp){
          this.imovel.push(imovel)
        }
      })
      this.apiGeral.getImoveisFiltrados(infoLocalAmbos).subscribe((resp) => {
        for(let imovel of resp){
          this.imovel.push(imovel)
        }
      })
    } else {
      console.log('Não tem nada no localstorage')
    }
  }


}

