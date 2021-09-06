import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDto, actorDto } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  form:FormGroup;
  @Input() actorModel:actorDto;

  @Output()submit=new EventEmitter<actorCreacionDto>();

  ngOnInit(): void {
    this.form=this.formBuilder.group({
    nombre:['',
      {
        validators:[Validators.required],
      }],
    fechaNacimiento:'',
    foto:null
    });
    if(this.actorModel!==undefined){
      this.form.patchValue(this.actorModel);
    }
  }
  onSubmit(){
    this.submit.emit(this.form.value);
    console.log(this.form);
  }
  archivoSeleccionado(archivo:any){
        this.form.get('foto')?.setValue(archivo);
  }

}
