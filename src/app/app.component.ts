import { Component, OnInit } from '@angular/core';
import { Tarea } from './model/tarea';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'workspacefrontend';
  tareas: any[] = [];
  tarea = {
    id: null,
    nombre: '',
    completado: false
  }

  constructor(
    private _appService: AppService
    
  ){}

  ngOnInit(): void {
      this.getAll();
  }

  getAll(){
    this._appService.getAll()
        .subscribe((data: any) =>{
          this.tareas = data
        });
  }

  save(){
    this._appService.create(this.tarea)
        .subscribe(() => this.getAll()); // Cargar nuevamente las tareas
        this.tarea = {
          id: null,
          nombre: '',
          completado: false
        }
  }

  edit(tarea:any){
    this.tarea = tarea;
  }

}
