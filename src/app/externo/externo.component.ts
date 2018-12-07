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
  public fecha: any;
  public numero1: number;
  public numero2: number;
  public prueba: boolean;
  public new_user: any;
  public user_save: any;

  constructor(
    private _peticionesService: PeticionesService

  ) { 
    this.user_id = 4;
    this.prueba = false;
    this.new_user={
        "name": "",
        "job": "" 
    }
  }

  ngOnInit() {
    this.fecha = new Date();// dentro de los parentecis podriamos colocar la fecha forzada 2019, 5, 20
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

  ejecutar(){
      if(this.numero1 <= 5 || this.numero2 <= 5 || this.numero1==undefined || this.numero2==undefined){
        alert("Debes introducir un numero mayor a 5")
        this.prueba = false;
      }else{
        this.prueba = true;
        
      }
  }

  onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.user_save = response;
        alert("El Usuario "+this.user_save.name+" se ha guardado Correctamente")
        console.log(response);
        form.reset();
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}