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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var todo_service_1 = require("./todo.service");
var DataService = /** @class */ (function () {
    function DataService(todoService) {
        var _this = this;
        this.todoService = todoService;
        this.todosSource = new BehaviorSubject_1.BehaviorSubject([]);
        this.currentTodos = this.todosSource.asObservable();
        this.todoService.getTodos().subscribe(function (todos) {
            _this.todosSource.next(todos);
        });
    }
    DataService.prototype.deleteTodo = function (todo) {
        var _this = this;
        var todos = this.todosSource.getValue();
        this.todoService.deleteTodo(todo._id)
            .subscribe(function (data) {
            if (data.n === 1) {
                for (var i = 0; i < todos.length; i++) {
                    if (todos[i]._id === todo._id) {
                        todos.splice(i, 1);
                    }
                }
                _this.todosSource.next(todos);
            }
        });
    };
    DataService.prototype.addTodo = function (todo) {
        var _this = this;
        var result;
        var todos = this.todosSource.getValue();
        result = this.todoService.saveTodo(todo);
        result.subscribe(function (data) {
            todos.push(data);
            _this.todosSource.next(todos);
        });
    };
    DataService.prototype.updateStatus = function (todo) {
        var _this = this;
        var todos = this.todosSource.getValue();
        this.todoService.updateTodo(todo)
            .subscribe(function (data) {
            if (data.n === 1) {
                for (var i = 0; i < todos.length; i++) {
                    if (todos[i]._id === todo._id) {
                        todos[i] = todo;
                    }
                }
                _this.todosSource.next(todos);
            }
        });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [todo_service_1.TodoService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map