import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Item } from '../models/Item';


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
    this.login();
    this.getItems();
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

  async login(){
    this.session.login()
      .then((data:any) =>
      {
        console.log("Login success")
        console.log(data)
      })
      .catch((error:any) => {
        console.log("Promise(http) login rejected with \n" + JSON.stringify(error));
      });
  }

}
