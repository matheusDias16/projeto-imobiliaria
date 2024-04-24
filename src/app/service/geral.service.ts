import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConteudoSite } from '../model/conteudoSite/conteudo-site';
import { Imoveis } from '../model/imoveis/imoveis';
import { Tipos } from '../model/tipos/tipos';
import { Cidades } from '../model/cidades/cidades';
import { Bairros } from '../model/bairros/bairros';
import { Corretores } from '../model/corretores/corretores';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor(private http: HttpClient) { }
  readonly urlDaApi: string = 'http://localhost:3000';

//IMOVEIS
getImoveis(): Observable<Imoveis[]>{
  return this.http.get<Imoveis[]>(`${this.urlDaApi}/imoveis`) 
}
getImovelPorId(id: Number): Observable<Imoveis>{
  return this.http.get<Imoveis>(`${this.urlDaApi}/imoveis/${id}`)
}
deleteImovel( id: Number ): Observable<Imoveis>{
  return this.http.delete<Imoveis>(`${this.urlDaApi}/imoveis/${id}`)  
}
criarImovel( imovelNovo: Imoveis ): Observable<Imoveis>{
  return this.http.post<Imoveis>(`${this.urlDaApi}/imoveis`, imovelNovo) // Passamos URL e o objeto do novo produto
}
getImoveisFiltrados(filtro:string): Observable<Imoveis[]>{
  return this.http.get<Imoveis[]>(`${this.urlDaApi}/imoveis?${filtro}`)
}
editaImovel( imovelAlterado:Imoveis ): Observable<Imoveis>{
  return this.http.put<Imoveis>(`${this.urlDaApi}/imoveis/${imovelAlterado.id}`, imovelAlterado)
}
//TIPOS
getTipos(): Observable<Tipos[]>{
  return this.http.get<Tipos[]>(`${this.urlDaApi}/tipos`) 
}
criarTipo( novoTipo: Tipos ): Observable<Tipos>{
  return this.http.post<Tipos>(`${this.urlDaApi}/tipos`, novoTipo) // Passamos URL e o objeto do novo produto
}
deleteTipos( id: Number ): Observable<Tipos>{
  return this.http.delete<Tipos>(`${this.urlDaApi}/tipos/${id}`)  
}
editaTipos( imovelAlterado:Tipos ): Observable<Tipos>{
  return this.http.put<Tipos>(`${this.urlDaApi}/tipos/${imovelAlterado.id}`, imovelAlterado)
}
//BUSCA
getBusca(): Observable<ConteudoSite>{
    return this.http.get<ConteudoSite>(`${this.urlDaApi}/conteudoSite`) 
}
//BAIRROS   
pegaBairros(): Observable<Bairros[]>{
  return this.http.get<Bairros[]>(`${this.urlDaApi}/bairros`) 
}
//CIDADES
pegaCidade(): Observable<Cidades>{
  return this.http.get<Cidades>(`${this.urlDaApi}/cidades`) 
}
criarCidade( novaCidade: Cidades ): Observable<Cidades>{
  return this.http.post<Cidades>(`${this.urlDaApi}/cidades`, novaCidade) // Passamos URL e o objeto do novo produto
}
deleteCidade( id: Number ): Observable<Cidades>{
  return this.http.delete<Cidades>(`${this.urlDaApi}/cidades/${id}`)  
}  
//CORRETORES 
 
pegaCorretores(): Observable<Corretores[]>{
  return this.http.get<Corretores[]>(`${this.urlDaApi}/corretores`) 
}
 
 
}
