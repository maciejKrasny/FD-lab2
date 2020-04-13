import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'todoForm',
  templateUrl: 'todoForm.component.html',
})

export class TodoFormComponent implements OnInit {
  constructor(
    private data: DataService
  ) {}

  ngOnInit() {
  }

  addTodo(event, todoText) {
    const newTodo = {
      text: todoText.value,
      done: false,
    };
    this.data.addTodo(newTodo);
    todoText.value = '';
  }
}
