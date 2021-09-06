import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generoCreacionDto } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent  {

  /*con router estamos usando el servicio de navegacion, esto no permite navegar hacia eñ componente de indice generos*/
    constructor(private router:Router,private generroService:GenerosService) { }




  guardarCambios(genero:generoCreacionDto){
    this.generroService.CrearGenero(genero).
    subscribe(()=>{this.router.navigate([''])}
    ,error=>
      console.error(error)

    )
    console.log(this.generroService.ObtenerTodos)
    this.router.navigate(['/generos']);
  }


}
