import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ItemComponent implements OnInit {
  @Input("ingrediente") data:{ingrediente:string}

  constructor() {
    console.log(this.data)
  }

  ngOnInit() {
    console.log(this.data)
  }

}
