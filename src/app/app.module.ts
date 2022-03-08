import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XhnToolbarComponent } from './xhn-toolbar/xhn-toolbar.component';
import { XtoolbarComponent } from './xtoolbar/xtoolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    XtoolbarComponent,
    XhnToolbarComponent
  ],
  imports: [ BrowserModule, AppRoutingModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
