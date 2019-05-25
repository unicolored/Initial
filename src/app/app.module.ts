import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InitialModule} from './lib/initial.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InitialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
