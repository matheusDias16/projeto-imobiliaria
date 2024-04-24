import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/service/geral.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Imagens } from 'src/app/model/imoveis/imagens';
import { Valores } from 'src/app/model/imoveis/valores';
import { Caracteristicas } from 'src/app/model/imoveis/caracteristicas';
import { Imoveis } from 'src/app/model/imoveis/imoveis';
import { Bairros } from 'src/app/model/bairros/bairros';
import { Tipos } from 'src/app/model/tipos/tipos';
import { Corretores } from 'src/app/model/corretores/corretores';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  camposValores: Valores[] = [{compra:0,aluguel:0,condominio:0,iptu:0}]
  campoCaracteristicas: Caracteristicas[] = []
  campoImagem: Imagens[] = [{caminho:'',lugar:''}]
  formularioImv: FormGroup;
  bairro: Bairros []= []
  tipo:Tipos[] = []
  corretor: Corretores[] = []

  constructor(
    private api: GeralService
  ) {
    this.formularioImv = new FormGroup({
      anuncio: new FormControl('', [Validators.required]),
      corretor: new FormControl('', [Validators.required]),
      tipoImovel: new FormControl('', [Validators.required]),
      tipoDeVenda: new FormControl('', [Validators.required]),
      compra: new FormControl('', [Validators.required]),
      aluguel: new FormControl('', [Validators.required]),
      condominio: new FormControl('', [Validators.required]),
      iptu: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      metragem: new FormControl('', [Validators.required]),
      quartos: new FormControl('', [Validators.required]),
      banheiros: new FormControl('', [Validators.required]),
      vagas: new FormControl('', [Validators.required]),
      caracteristicas: new FormControl('', [Validators.required]),
      caminho: new FormControl('', [Validators.required]),
      lugar: new FormControl('', [Validators.required]),
      sobre: new FormControl('', [Validators.required]),


    })
  }
  ngOnInit(): void {
    this.pegaBairros()
    this.pegaTipos()
    this.pegaCorretores()
  }
  pegaBairros(){
    this.api.pegaBairros().subscribe( (bairros) => {
      this.bairro = bairros
    })
  } 
  pegaTipos(): void{
    this.api.getTipos().subscribe( (tipos) => {
      this.tipo = tipos
    })  
  } 
  pegaCorretores(): void{
    this.api.pegaCorretores().subscribe( (corretores) => {
      this.corretor = corretores
    })  
  } 


  criaImovel(): void {
    let imovelNovo = new Imoveis()
    imovelNovo.anuncio = this.formularioImv.value.anuncio
    imovelNovo.corretor = this.formularioImv.value.corretor
    imovelNovo.tipoImovel = this.formularioImv.value.tipoImovel
    imovelNovo.tipoDeVenda = this.formularioImv.value.tipoDeVenda
    imovelNovo.estado = this.formularioImv.value.estado
    imovelNovo.cidade = this.formularioImv.value.cidade
    imovelNovo.bairro = this.formularioImv.value.bairro
    imovelNovo.cep = this.formularioImv.value.cep
    imovelNovo.metragem = this.formularioImv.value.metragem1
    imovelNovo.quartos = this.formularioImv.value.quartos
    imovelNovo.banheiros = this.formularioImv.value.banheiros
    imovelNovo.vagas = this.formularioImv.value.vagas
    imovelNovo.caracteristicas = this.formularioImv.value.caracteristicas
    imovelNovo.sobre = this.formularioImv.value.sobre
    imovelNovo.valores.compra = this.camposValores[0].compra
    imovelNovo.valores.aluguel = this.camposValores[0].aluguel
    imovelNovo.valores.condominio = this.camposValores[0].condominio
    imovelNovo.valores.iptu = this.camposValores[0].iptu


    for(let imagem of this.campoImagem){
      let img = new Imagens
   img.caminho = imagem.caminho
   img.lugar = imagem.lugar
   
      imovelNovo.imagens.push(img)
    }

    this.api.criarImovel( imovelNovo ).subscribe( (data) => {
      alert('Postagem criada!')
    })




  }
}
