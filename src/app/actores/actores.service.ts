import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { formatearFecha } from '../utilidades/helpers';
import { actorCreacionDto } from './actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private http:HttpClient){ }

  private apiUrl=environment.apiURL+"actores";

  public crear(actor:actorCreacionDto){
    const formData=this.construirFormData(actor);
    return this.http.post(this.apiUrl,actor);
  }
  private  construirFormData(actor:actorCreacionDto):FormData{
    const formData=new FormData();
    formData.append('nombre',actor.nombre);
    formData.append('biografia',actor.biografia);
    if(actor.fechaNacimiento){
      formData.append('fechaNacimiento',formatearFecha(actor.fechaNacimiento));
    }
    if(actor.foto){
      formData.append('foto',actor.foto)
    }
    return formData;
  }

}
