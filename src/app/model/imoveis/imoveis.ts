import { Valores } from "./valores"
import { Imagens } from "./imagens"

export class Imoveis {
public id : number
public corretor : number
public anuncio : string
public tipoImovel : number
public tipoDeVenda : string
public valores: Valores
public estado : string
public cidade : string
public bairro : string
public cep : number
public metragem : number
public quartos : number 
public banheiros : number
public vagas : number
public caracteristicas : string[]
public imagens : Imagens[]
public sobre : string 

constructor(){
this.id = 0
this.corretor = 0
this.anuncio = ''
this.tipoImovel = 0
this.tipoDeVenda = ''
this.valores= new Valores()
this.estado = ''
this.cidade = ''
this.bairro = ''
this.cep = 0
this.metragem = 0
this.quartos = 0 
this.banheiros = 0
this.vagas = 0
this.caracteristicas = []
this.imagens = []
this.sobre = '' 
}

}
