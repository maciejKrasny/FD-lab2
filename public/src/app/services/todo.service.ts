import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Todo} from "../Todo";

@Injectable() 
export class TodoService {
  constructor(private _http:HttpClient){
  }

  getTodos() {
    return this._http.get<Todo[]>('http://localhost:4000/api/todos')
  }

  saveTodo(todo) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post<Todo>('http://localhost:4000/api/todos', JSON.stringify(todo), {headers: headers});
  }

  updateTodo(todo) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put<{ n: number }>(`http://localhost:4000/api/todos/${todo._id}`, JSON.stringify(todo), {headers: headers});
  }

  deleteTodo(todo_id) {
    return this._http.delete<{ n: number }>(`http://localhost:4000/api/todos/${todo_id}`)
  }
}
