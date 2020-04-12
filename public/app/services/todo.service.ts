import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() 
export class TodoService {
  constructor(private _http:Http){
  }

  getTodos() {
    return this._http.get('/api/todos')
      .map(res => res.json());
  }

  saveTodo(todo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/todos', JSON.stringify(todo), {headers: headers})
      .map(res => res.json());
  }

  updateTodo(todo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put(`/api/todos/${todo._id}`, JSON.stringify(todo), {headers: headers})
      .map(res => res.json());
  }

  deleteTodo(todo_id) {
    return this._http.delete(`/api/todos/${todo_id}`)
      .map(res => res.json());
  }
}