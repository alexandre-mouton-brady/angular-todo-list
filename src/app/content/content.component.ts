import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.styl'],
})
export class ContentComponent implements OnInit {
  todos: Array<Todo>;
  txt: string;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todosService.getTodos();
  }

  addTodo(): void {
    this.todosService.addTodo(this.txt);
    this.clearTxt();
  }

  removeTodo(id: number): void {
    this.todosService.removeTodo(id);
    this.getTodos();
  }

  toggleDone(id: number): void {
    this.todosService.toggleDone(id);
    this.getTodos();
  }

  clearTxt(): void {
    this.txt = '';
  }
}
