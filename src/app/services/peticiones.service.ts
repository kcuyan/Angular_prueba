import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'; //nos permitira hacer peticiones ajax y ademas modificar los encabezados
//import { Observable } from 'rxjs/Observable'; 
import { Observable } from 'rxjs';//Con este se recoge los datos del api rest cuando se hace una peticion.

@Injectable()
export class PeticionesService{
    public url: string;
    constructor(
        public _http: HttpClient
    ){
        this.url = "https://reqres.in";
    }
    
    getUser(user_id):Observable<any>{
        return this._http.get(this.url+'/api/users/'+user_id);
    }

    addUser(user): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'/api/users', params, {headers: headers});
    }

}