import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public user_id: any;

  constructor(
    private _peticionesService: PeticionesService

  ) { 
    this.user_id = 4;
  }

  ngOnInit() {
   this.cargaUsuario();
  }

  cargaUsuario(){
    this._peticionesService.getUser(this.user_id).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error)
      }
  );
  }

}
