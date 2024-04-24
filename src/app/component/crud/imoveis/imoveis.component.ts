import { Component, OnInit } from '@angular/core';
import { ConteudoSite } from 'src/app/model/conteudoSite/conteudo-site';
import { Imoveis } from 'src/app/model/imoveis/imoveis';
import { Tipos } from 'src/app/model/tipos/tipos';
import { GeralService } from 'src/app/service/geral.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Corretores } from 'src/app/model/corretores/corretores';
import { Bairros } from 'src/app/model/bairros/bairros';
import { Valores } from 'src/app/model/imoveis/valores';
import { Imagens } from 'src/app/model/imoveis/imagens';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.scss']
})
export class ImoveisComponent implements OnInit{
  camposValores: Valores[] = [{compra:0,aluguel:0,condominio:0,iptu:0}]
  campoImagem: Imagens[] = [{caminho:'',lugar:''}]

  imovel: Imoveis[] = []
  tipo:Tipos[] = []
  modalAberto: boolean = false;
  edicaoImovel: boolean = false;
  idDaEdicao: number = 0;
  formularioImv : FormGroup
  idDaUrl: number = 0
  corretor: Corretores[] = []
  bairro: Bairros []= []

    constructor(
      private api: GeralService,
      private rotaAtiva: ActivatedRoute,
    ){
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
      this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
        this.pegaImoveis()
        this.pegaTipos()
        this.pegaCorretores()
        this.pegaBairros()
    }

  pegaImoveis(): void{
    this.api.getImoveis().subscribe( (imoveis) => {
      this.imovel = imoveis
    })
  }
  pegaTipos(): void{
    this.api.getTipos().subscribe( (tipos) => {
      this.tipo = tipos
    })  
  }
  deletarImoveis(id: number): void {
    this.api.deleteImovel(id).subscribe((respApi) => {
      this.pegaImoveis()
    })
  }
  pegaCorretores(): void{
    this.api.pegaCorretores().subscribe( (corretores) => {
      this.corretor = corretores
    })  
  } 
  pegaBairros(){
    this.api.pegaBairros().subscribe( (bairros) => {
      this.bairro = bairros
    })
  } 

  abreModalEditar(id : number): void {
    this.api.getImovelPorId(id).subscribe((respApi) =>{
      this.formularioImv.controls['anuncio'].setValue(respApi.anuncio)
      
      this.idDaEdicao = id
      this.edicaoImovel = true
      this.modalAberto = true
    })
  }
  fechaModal(): void {
    this.modalAberto = false
  }
  editaImovel(): void {
    let imovelNovo = new Imoveis()
    imovelNovo.anuncio = this.formularioImv.value.anuncio
    imovelNovo.corretor = this.formularioImv.value.corretor
    imovelNovo.tipoImovel = this.formularioImv.value.tipoImovel
    imovelNovo.tipoDeVenda = this.formularioImv.value.tipoDeVenda
    imovelNovo.estado = this.formularioImv.value.estado
    imovelNovo.cidade = this.formularioImv.value.cidade
    imovelNovo.bairro = this.formularioImv.value.bairro
    imovelNovo.cep = this.formularioImv.value.cep
    imovelNovo.metragem = this.formularioImv.value.metragem
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

    imovelNovo.id = this.idDaEdicao
    this.api.editaImovel(imovelNovo).subscribe( (respApi) => {
      this.pegaImoveis()
      this.modalAberto = false
    })




  }
}
