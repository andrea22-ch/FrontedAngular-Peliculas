import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generoCreacionDto } from '../genero';

@Component({
  selector: 'app-formularios-generos',
  templateUrl: './formularios-generos.component.html',
  styleUrls: ['./formularios-generos.component.css']
})
export class FormulariosGenerosComponent implements OnInit {

  constructor(private formBilder:FormBuilder) { }
    /*formGroup un conjunto de campos juntos con sus validaciones*/
  form:FormGroup;
  @Input() generoModel:generoCreacionDto;
  @Output() submit= new EventEmitter<generoCreacionDto>();
  ngOnInit(): void {
    this.form=this.formBilder.group({
      nombre:['',{
        validators:[Validators.required, Validators.minLength(3)]
      }]
    });
    if(this.generoModel!==undefined){
      this.form.patchValue(this.generoModel);
    }
  }
  guardarCambios(){
      this.submit.emit(this.form.value);
  }
  obtenerErrorCampo(){
   var campo=this.form.get('nombre');
   if(campo?.hasError('required')){
     return "el campo nombre es requerido";
   }
   if(campo?.hasError('minlength')){
     return "la longitud minima es 3 caracteres";
   }
   return '';
  }

}
