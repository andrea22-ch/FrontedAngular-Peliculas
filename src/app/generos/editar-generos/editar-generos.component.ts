import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDto } from '../genero';

@Component({
  selector: 'app-editar-generos',
  templateUrl: './editar-generos.component.html',
  styleUrls: ['./editar-generos.component.css']
})
export class EditarGenerosComponent implements OnInit {

  constructor(private router:Router) { }
  generoModel:generoCreacionDto;
  ngOnInit(): void {
  }
  guardarCambios(genero:generoCreacionDto){
    //**guaradar los cambios */
    console.log(genero);
    this.router.navigate(['/generos']);
  }

}
