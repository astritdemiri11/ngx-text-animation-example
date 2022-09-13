import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TextAnimationModule } from 'ngx-text-animation';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TextAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
