import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { peliculasCreacionDTO, peliculasDTO } from '../peliculas';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  peliculaform:FormGroup;
  @Output() onsubmit=new EventEmitter<peliculasCreacionDTO>();
  @Input() modeloPelicula:peliculasDTO;

  ngOnInit(): void {
    this.peliculaform= this.formBuilder.group({
      titulo:['',{
        validators:[Validators.required]
        }],
        enCines:false,
        trailer: '',
        fechaLanzamiento:'',
        poster:'',
        resumen:''
    });
    if(this.modeloPelicula!==undefined){
      this.peliculaform.patchValue(this.modeloPelicula);
  }
  }
  guardarCambios(){
  this.onsubmit.emit(this.peliculaform.value);
  }
  archivoSelecionado(file:File){
    this.peliculaform.get("poster")?.setValue(file);
  }


}
