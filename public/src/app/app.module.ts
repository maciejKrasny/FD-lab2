import { NgModule }      from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodosComponent} from './components/todos/todos.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';
import {DataService} from "./services/data.service";
import {TodoService} from "./services/todo.service";


@NgModule({
  imports:      [ BrowserModule, HttpClientModule ],
  declarations: [AppComponent, TodosComponent, TabsComponent, TabComponent],
  bootstrap: [AppComponent],
  providers: [DataService, TodoService]
})

export class AppModule { }
