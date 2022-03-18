import { Injectable } from '@angular/core';
// HttpClient 
import { HttpClient } from '@angular/common/http';
// import { Tarea } from '../model/tarea';

const API_BASE = 'https://workspace-juandieruiz.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor(
    private _http : HttpClient,
  ) { }

  //  TODAS LAS TAREAS
  getAll(){
    return this._http.get(`${API_BASE}/tareas`);
  }

  // AGREGAR TAREA
  create(tarea : any){
    return this._http.post(`${API_BASE}/tareas`, tarea);
  }

  // ACTUALIZAR TAREA
  update(id : string, tarea : any){
    return this._http.put(`${API_BASE}/tareas/${id}`, tarea)
  }

  // BORRAR TAREA
  delete(id: string){
    return this._http.delete(`${API_BASE}/tareas/${id}`)
  }
  
}
