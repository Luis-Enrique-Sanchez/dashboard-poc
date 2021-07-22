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
   let rute = this.api_url + "/portalserver/services/rest/api/v1/private/get/items"
   //let headers:HttpHeaders = this.appendAuthHeaders(new HttpHeaders())
   return this.http.get(rute).toPromise()
  }

  appendAuthHeaders(headers: HttpHeaders): HttpHeaders{
    headers = headers.append('Authorization', "Basic "+btoa(this.user+':'+this.password))
    headers = headers.append("Accept","*/*")
    headers = headers.append("Content-Type","application/json")
    return headers
  }

  async login(){
    let route = "localhost:7777/portalserver/services/rest/api/v1/public/channels/bne/legacy/authenticate/login"
    let body = {
      "sessionRequired": true,
      "customerCredentials": {
        "customerId": "1974440",
        "legalRepresentativeId": "21",
        "password": "21A1B2C3",
        "encryptionType": "",
        "language": "es",
        "clientIp": "1.1.1.1",
        "data": ""
      }
    }

    let headers = new HttpHeaders()
    headers = headers.append("Accept","*/*")
    headers = headers.append("Content-Type","application/json")
    return this.http.post(route,body,{headers:headers}).toPromise()
  }


}
