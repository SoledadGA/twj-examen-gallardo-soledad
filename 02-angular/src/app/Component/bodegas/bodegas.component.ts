import {Component, Input, OnInit} from '@angular/core';
import {BodegaClass} from "../../Class/BodegaClass";

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})
export class BodegasComponent implements OnInit {

  @Input() bodega:BodegaClass
  constructor() { }

  ngOnInit() {

  }

}
