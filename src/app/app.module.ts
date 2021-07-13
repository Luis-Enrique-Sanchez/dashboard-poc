import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms'
import { DashNavbar1Component } from './dash-navbar1/dash-navbar1.component';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashNavbar1Component,
    LayoutComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
