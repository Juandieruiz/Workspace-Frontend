import { Injectable } from '@angular/core';
// HttpClient 
import { HttpClient } from '@angular/common/http';

const API_BASE = 'http://localhost:8080';

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

  update(id : string, tarea :any){
    return this._http.put(`${API_BASE}/tareas/${id}`, tarea)
  }

  delete(id: string){
    return this._http.delete(`${API_BASE}/tareas/${id}`)
  }
  
}