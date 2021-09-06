import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDto, actorDto } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  /*activatedRoutes nos permite obtener informacion de la variable de ruta */
  constructor(private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      alert(params.id);
    })
  }
  actorModel:actorDto={nombre:"Andrea condori", fechaNacimiento:new Date(),foto:"https://s1.eestatic.com/2020/11/16/actualidad/actualidad_536457108_165215029_855x1140.jpg",biografia:"fsdfdsf"};

  editarCambios(actor:actorCreacionDto){
    console.log(actor)
  }

}
