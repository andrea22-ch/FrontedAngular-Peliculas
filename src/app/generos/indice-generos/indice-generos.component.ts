import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private generoService:GenerosService) { }

  ngOnInit(): void {
    const generos=this.generoService.ObtenerTodos().
    subscribe(generos=>{
      console.log(generos);
    },error=>console.log(error));
  }

}
