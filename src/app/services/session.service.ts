import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  user: string = "user";
  password: string = "user";
  api_url = environment.api_url;  

  mock_cards = 
  [
    {
      ruta: "assets/img/pagos.png",
      titulo: "PAGOS"
    },
    {
     ruta: "assets/img/Autorizaciones.png",
     titulo: "AUTORIZACIONES"
    },
    {
     ruta: "assets/img/cuentas.png",
     titulo: "CUENTAS"
   },
   {
     ruta: "assets/img/transferencias.png",
     titulo: "TRANSFERENCIAS"
   },     
  ]

  constructor(private http: HttpClient) { }

  getItems_mock():any{
    return new Promise((resolve,reject) => {
      setTimeout(() => resolve(this.mock_cards), 2000);
    });
  }

  getItems():any{
   let rute = this.api_url + "/api/getItems"
   let headers:HttpHeaders = this.appendAuthHeaders(new HttpHeaders())


   console.log(headers)
   return this.http.get(rute,{headers:headers}).toPromise()
  }

  appendAuthHeaders(headers: HttpHeaders): HttpHeaders{
    headers = headers.append('Authorization', "Basic "+btoa(this.user+':'+this.password))
    headers = headers.append("Accept","*/*")
    headers = headers.append("Content-Type","application/json")
    return headers
  }
}
