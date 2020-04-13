import { Component, OnInit, Input } from '@angular/core';
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
      if (this.todoCondition === 'done') {
        this.todos = todos.filter((todo: Todo) => todo.done);
      } else if (this.todoCondition === 'todo') {
        this.todos = todos.filter((todo: Todo) => !todo.done);
      } else {
        this.todos = todos;
      }
    })
  }

  updateStatus(todo) {
    let _todo = {
      _id: todo._id,
      text: todo.text,
      done: !todo.done,
    };
    this.data.updateStatus(_todo);
  }

  deleteTodo(todo) {
    this.data.deleteTodo(todo);
  }
}
