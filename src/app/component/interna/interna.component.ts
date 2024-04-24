import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/service/geral.service';
import { Imoveis } from 'src/app/model/imoveis/imoveis';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent implements OnInit {
  imovel: Imoveis = new Imoveis()
  idDaUrl: number = 0
  modalAberto: boolean = false;
  modalImg: boolean = false;



  constructor(
    private api: GeralService,
    private rotaAtiva: ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
      this.pegaImoveis()
  }
  pegaImoveis(): void{
    this.api.getImovelPorId(this.idDaUrl).subscribe( (imoveis) => {
      this.imovel = imoveis
    })
  }

  // findImovel(id: number):any {
  //   let imv = this.imovel.find((obj) => obj.id == id)
  //   if(imv){
  //     return imv
  //   } else {
  //     return ''
  //   }
  // }
  // precoTotal(): number{
  //   let preco = 0
  //   for(let item of this.imovel){
  //     preco += ( this.findImovel(item.produto).preco * item.quantidade )
  //   }
  //   return preco
  // }
  fecharModal(): void{
    this.modalImg = false

  }

  abrirModalImg(): void{
    this.modalAberto = true
    this.modalImg = true
  }

}
