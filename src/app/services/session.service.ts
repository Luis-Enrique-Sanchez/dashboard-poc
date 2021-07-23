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
  session_id = ""
  path_cookie = "http://localhost:7777"


  setCookie(key:string,value:string){
    document.cookie=`${key}=${value};SameSite=None;`
  }

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
    return this.http.get('/assets/mock/cards.json').toPromise()
  }

  getItems():any{
   let rute = this.api_url + "/portalserver/services/rest/api/v1/private/get/items"
   let headers:HttpHeaders = this.appendAuthHeaders(new HttpHeaders())
   this.setCookie("JSESSIONID",this.session_id);
   console.log("Realizar llamada http con cookies:")
   console.log(document.cookie)
   return this.http.get(rute,{headers:headers/*,withCredentials:true*/}).toPromise()
  }

  appendAuthHeaders(headers: HttpHeaders): HttpHeaders{
    headers = headers.append("Accept","*/*")
    //headers = headers.append("Content-Type","application/json")
    return headers
  }

  private getCookie(name: string) {
    //console.log("COOKIES");
    //console.log(document.cookie);
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
  }

}
