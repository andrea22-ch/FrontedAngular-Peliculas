import { Component, OnInit } from '@angular/core';
import { peliculasCreacionDTO } from '../peliculas';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  GuardarCambios(pelicula:peliculasCreacionDTO){
    console.log(pelicula)
  }
}
