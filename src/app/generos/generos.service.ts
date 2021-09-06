import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generoCreacionDto, generoDto } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http:HttpClient) { }
  private apiURL=environment.apiURL+"generos";

  public ObtenerTodos():Observable<generoDto[]>{
    return this.http.get<generoDto[]>(this.apiURL);
  }
  public CrearGenero(genero:generoCreacionDto){
    return this.http.post(this.apiURL,genero);
  }
}
