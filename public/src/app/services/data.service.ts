import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../Todo';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root',
})
export class DataService  {
  private todosSource = new BehaviorSubject<Todo[]>([]);
  currentTodos = this.todosSource.asObservable();

  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe(todos => {
      this.todosSource.next(todos);
    });
   }

  deleteTodo(todo: Todo) {
    let todos = this.todosSource.getValue();
    this.todoService.deleteTodo(todo._id)
      .subscribe(data => {
        if (data.n === 1) {
          for (let i = 0; i < todos.length; i++) {
            if (todos[i]._id === todo._id) {
              todos.splice(i, 1);
            }
          }
          this.todosSource.next(todos);
        }
      })
  }

  addTodo(todo: Todo) {
    let result;
    let todos = this.todosSource.getValue();
    result = this.todoService.saveTodo(todo);
    result.subscribe(data => {
      todos.push(data);
      this.todosSource.next(todos);
    })
  }

  updateStatus(todo: Todo) {
    let todos = this.todosSource.getValue();
    this.todoService.updateTodo(todo)
      .subscribe(data => {
        if (data.n === 1) {
          for (let i = 0; i < todos.length; i++) {
            if (todos[i]._id === todo._id) {
              todos[i] = todo;
            }
          }
          this.todosSource.next(todos);
        }
      })
  }
}
