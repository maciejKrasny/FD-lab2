import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {TodosComponent} from './components/todos/todos.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [AppComponent, TodosComponent, TabsComponent, TabComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
