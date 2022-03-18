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

  constructor(
    private _appService: AppService
    
  ){}

  ngOnInit(): void {
      this._appService.getAll()
        .subscribe((data: any) =>{
          this.tareas = data
        });
  }

}
