"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../../services/data.service");
var TodosComponent = /** @class */ (function () {
    function TodosComponent(data /* private _todoService: TodoService */) {
        this.data = data;
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentTodos.subscribe(function (todos) {
            console.log("jestem", todos);
            if (_this.todoCondition === 'done') {
                _this.todos = todos.filter(function (todo) { return todo.done; });
            }
            else if (_this.todoCondition === 'todo') {
                _this.todos = todos.filter(function (todo) { return !todo.done; });
            }
            else {
                _this.todos = todos;
            }
        });
        // this.todos = [];
        // this.todosFiltered = [];
        // this._todoService.getTodos()
        //   .subscribe(todos => {
        //     this.todos = todos;
        //     todos.forEach(todo => {
        //       if (this.todoCondition === 'done' && todo.done) {
        //         this.todosFiltered.push(todo);
        //       }else if (this.todoCondition === 'todo' && !todo.done)
        //         this.todosFiltered.push(todo);
        //         else if(this.todoCondition === 'all') this.todosFiltered.push(todo);
        //     }
        //     );
        //     console.log("-----------")
        //   })
    };
    TodosComponent.prototype.addTodo = function (event, todoText) {
        // let result;
        var newTodo = {
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
    };
    TodosComponent.prototype.updateStatus = function (todo) {
        var _todo = {
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
    };
    TodosComponent.prototype.deleteTodo = function (todo) {
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
    };
    __decorate([
        core_1.Input('todoCondition'),
        __metadata("design:type", String)
    ], TodosComponent.prototype, "todoCondition", void 0);
    TodosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todos',
            templateUrl: 'todos.component.html',
            providers: [data_service_1.DataService /* TodoService */]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService /* private _todoService: TodoService */])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map