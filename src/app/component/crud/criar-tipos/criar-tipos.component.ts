import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/service/geral.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tipos } from 'src/app/model/tipos/tipos';

@Component({
  selector: 'app-criar-tipos',
  templateUrl: './criar-tipos.component.html',
  styleUrls: ['./criar-tipos.component.scss']
})
export class CriarTiposComponent implements OnInit {
  tipo: Tipos[] = []
  formularioTipo: FormGroup;
  idTipoEditado : number = 0
  constructor(
    private api: GeralService
  ) {
    this.formularioTipo = new FormGroup({
      tipos: new FormControl('', [Validators.required]),


    })
  }
  ngOnInit(): void {
    this.pegaTipos()
  }

  pegaTipos(): void {
    this.api.getTipos().subscribe((tipos) => {
      this.tipo = tipos
    })
  }
  deletarTipos(id: Number): void {
    this.api.deleteTipos(id).subscribe((respApi) => {
      this.pegaTipos()
    })
  }

  criaTipos(): void {
    let novoTipo = new Tipos()
    novoTipo.tipo = this.formularioTipo.value.tipos
    
    if(this.idTipoEditado == 0){
      this.api.criarTipo(novoTipo).subscribe((data) => {
        alert('Postagem criada!')
      })
    } else{
      novoTipo.id = this.idTipoEditado
      this.api.editaTipos(novoTipo).subscribe((data) => {
        alert('tipoEditado')
        this.idTipoEditado = 0 
        this.formularioTipo.controls['tipos'].setValue('')
      })
    }


  }
  editaTipos(tipo:Tipos):void {
   this.formularioTipo.controls['tipos'].setValue(tipo.tipo) 
   this.idTipoEditado = tipo.id
  }


}
