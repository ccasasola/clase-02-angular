import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import {Ingrediente} from "../ingrediente"

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class FormularioComponent implements OnInit {
  //@Output("onIngredienteAdd") ingredienteAgregado = new EventEmitter<{ingrediente:string}>()
  @Output("onIngredienteAdd") ingredienteAgregado = new EventEmitter<Ingrediente>()
  
  @ViewChild("ingredienteInput") data:ElementRef
  
  //1era forma ngModel
  //ingredienteInput:string

  constructor() {
    //this.ingredienteInput = "fideos"
  }

  agregarIngrediente(){
      console.log(this.data)
      //this.ingredienteAgregado.emit({ingrediente: this.ingredienteInput})
      //this.ingredienteAgregado.emit({ingrediente: ingrediente.value})
      this.ingredienteAgregado.emit({ingrediente: this.data.nativeElement.value})
      this.data.nativeElement.value = ""
  }

  ngOnInit() {
  }

}
