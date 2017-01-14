import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {InputComponent} from "./components/input.component";
import {OutputComponent, SafeHtmlPipe} from "./components/output.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ClickablePipe} from "./pipes/clickable.pipe";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, InputComponent, OutputComponent, ClickablePipe, SafeHtmlPipe ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ OutputComponent ]
})
export class AppModule { }
