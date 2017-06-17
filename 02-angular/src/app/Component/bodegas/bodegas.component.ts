import {Component, Input, OnInit} from '@angular/core';
import {BodegaClass} from "../../Class/BodegaClass";
import {Http} from "@angular/http";

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})
export class BodegasComponent implements OnInit {

  @Input() bodega:BodegaClass
  bodegas:BodegaClass[]=[];
  nuevaBodega:BodegaClass = new BodegaClass();

  constructor(private _http:Http) { }

  ngOnInit() {
    this._http
      .get("http://localhost:1337/Bodega/")
      .subscribe(
        respuesta=>{
          let respuestajson:BodegaClass[] = respuesta.json();
          this.bodegas = respuestajson;
          console.log("Bodegas: ",this.bodegas);
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

  crearBodega(){
    console.log("Entro a crear Bodega");
    this._http
      .post("http://localhost:1337/Bodega",this.nuevaBodega)
      .subscribe(
        respuesta=>{
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ',respuestaJson);
        },
        error=>{
          console.log("Error",error);
        }
      )
  }

  cargarBodegas(){
    this._http
      .get("http://swapi.co/api/planets")
      //.map(response=>response.json()
      .subscribe(
        (response)=>{
          console.log("Response:",response);
          console.log(response.json());
          let respuesta = response.json();
          console.log(respuesta.next);
          this.bodegas = respuesta.results;
        },
        (error)=>{
          console.log("Error:",error);
        },
        ()=>{
          console.log("Finally");
        }
      )
  }

}
