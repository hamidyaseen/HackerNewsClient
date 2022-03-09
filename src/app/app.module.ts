import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XToolbarComponent } from './x-toolbar/x-toolbar.component';
import { HnToolbarComponent } from './hn-toolbar/hn-toolbar.component';

@NgModule({
  declarations: [  AppComponent, XToolbarComponent, HnToolbarComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
