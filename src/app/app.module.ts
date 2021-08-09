import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms'
import { DashNavbar1Component } from './dash-navbar1/dash-navbar1.component';
import { HttpClientModule } from '@angular/common/http';
import { PocGetItemsModule} from 'node_modules/poc-get-items';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashNavbar1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PocGetItemsModule.forRoot({
      API_URL: environment.api_url,
      GET_ITEMS_PATH: environment.getItemsPath
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
