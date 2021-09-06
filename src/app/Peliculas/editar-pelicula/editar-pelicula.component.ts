import { Component, OnInit } from '@angular/core';
import { peliculasDTO } from '../peliculas';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }
  modeloPelicula:peliculasDTO={titulo:"la saga de Andrea ",trailer:"dfsdfsd",fechaLanzamiento:new Date(),resumen:"lorem ipsum",enCine:true,poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBOyyqCfFT6vueGH5XHZ8wewHEhOY_z8HQA&usqp=CAU"}

  ngOnInit(): void {
  }

}
