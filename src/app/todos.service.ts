import { Injectable } from '@angular/core';

// Definition of a Todo
import { Todo } from './todo';

@Injectable()
export class TodosService {
  todos: Array<Todo>;
  id: number;

  constructor() {
    this.todos = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];

    if (this.todos.length > 0)
      localStorage.setItem('todos', JSON.stringify(this.todos));

    this.id = localStorage.getItem('id')
      ? JSON.parse(localStorage.getItem('id'))
      : 0;

    if (this.id === 0) localStorage.setItem('id', JSON.stringify(this.id));
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(txt: string): void {
    const todo: Todo = {
      id: this.id,
      txt,
      done: false,
      time: new Date(),
    };

    this.todos.push(todo);
    this.id++;

    localStorage.setItem('todos', JSON.stringify(this.todos));
    localStorage.setItem('id', JSON.stringify(this.id));
  }

  removeTodo(id: number): void {
    const newTodos = this.todos.filter(todo => todo.id !== id);

    this.todos = newTodos;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleDone(id: number): void {
    const newTodos = this.todos.map(todo => {
      const newTodo = todo;
      if (todo.id === id) newTodo.done = !todo.done;
      return newTodo;
    });

    this.todos = newTodos;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
