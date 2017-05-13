import { Component, OnInit, Input } from '@angular/core';
import { Persona } from "app/lista-personas/persona";

@Component({
  selector: 'app-persona-item',
  templateUrl: './persona-item.component.html',
  styleUrls: ['./persona-item.component.css']
})
export class PersonaItemComponent implements OnInit {

  @Input("dataPersona") data:Persona

  constructor() { }

  ngOnInit() {
  }

}
