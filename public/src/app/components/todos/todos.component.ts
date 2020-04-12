import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../Todo'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'todos',
  templateUrl: 'todos.component.html',
})

export class TodosComponent implements OnInit {
  todos: Todo[];
  @Input('todoCondition') todoCondition: string;

  constructor(
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.currentTodos.subscribe(todos => {
      console.log("jestem", todos);
      if (this.todoCondition === 'done') {
        this.todos = todos.filter((todo: Todo) => todo.done);
      } else if (this.todoCondition === 'todo') {
        this.todos = todos.filter((todo: Todo) => !todo.done);
      } else {
        this.todos = todos;
      }
    })
  }

  addTodo(event, todoText) {
    // let result;
    let newTodo = {
      text: todoText.value,
      done: false,
    };

    // result = this._todoService.saveTodo(newTodo);
    // result.subscribe(data => {
    //   console.log(data);
    //   this.todos.push(data);
    //   if (this.todoCondition === 'todo' || this.todoCondition === 'all') {
    //     this.todosFiltered.push(data);
    //   }
      // todoText.value = '';
    // })
    this.data.addTodo(newTodo);
  }

  updateStatus(todo) {
    let _todo = {
      _id: todo._id,
      text: todo.text,
      done: !todo.done,
    };
    // todo.done = !todo.done;
    // this._todoService.updateTodo(_todo)
    //   .subscribe(data => {
    //     todo.done = !todo.done
    //   });
    this.data.updateStatus(_todo);
  }

  deleteTodo(todo) {
    // let todos = this.todos;
    // this._todoService.deleteTodo(todo._id)
    //   .subscribe(data => {
    //     if (data.n === 1) {
    //       for (let i = 0; i < todos.length; i++) {
    //         if (todos[i]._id === todo._id) {
    //           todos.splice(i, 1);
    //         }
    //       }
    //     }
    //   })
    this.data.deleteTodo(todo);
  }
}
