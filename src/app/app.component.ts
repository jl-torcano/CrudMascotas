import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoCRUD';

  constructor(private router:Router){

  }

  alta(){
    this.router.navigate(['alta']);
  }

  modificar(){
    this.router.navigate(['modificar']);
  }

  listado(){
    this.router.navigate(['listado']);
  }
}
