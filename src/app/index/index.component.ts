import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Item } from '../models/Item';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cards:Item[] = []
  cards_loaded = false
  constructor(private session: SessionService) { }

  ngOnInit(): void {
    //this.getItems();
    
  }

  async getItems(){
    this.session.getItems_mock()
      .then((cards: any) => 
      {
        this.cards = cards["cards"]
        this.cards_loaded = true
      })
      .catch((error:any) => {
        console.log("Promise(http) rejected with \n" + JSON.stringify(error));
      });
  }

  async getItems2(){
    this.session.getItems()
      .then((cards: any) => 
      {
        this.cards = cards["cards"]
        this.cards_loaded = true
      })
      .catch((error:any) => {
        console.log("Promise(http) rejected with \n" + JSON.stringify(error));
      });
  }

  setSessionCookie(session_id:string){
    this.session.setCookie("JSESSIONID",session_id);
  }

  @HostListener('window:message', ['$event']) onPostMessage(event:any) {
    if(event.data["JSESSIONID"]){
      console.log("Host listener id")
      let cookie = event.data["JSESSIONID"];
      this.session.session_id = cookie;
      this.getItems2();
    }
  }

}
