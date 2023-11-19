import { Injectable, computed, signal } from '@angular/core';
import { Todo } from '@feature/todo/domain/model/todo.model';
import { TodoRepository } from '@feature/todo/domain/repository/todo.repository';
import { StatusFilter } from '@feature/todo/domain/type/status-filter.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService extends TodoRepository {
  private _todos = signal<Todo[]>([]);
  private _filter = signal<StatusFilter>('all');

  private _findbyStatus = computed(() => {
    const filter = this._filter();
    const todos = this._todos();

    if (filter === 'pending') return todos.filter((todo) => !todo.isCompleted);
    if (filter === 'completed') return todos.filter((todo) => todo.isCompleted);
    return todos;
  });

  override create(todo: Todo): void {
    this._todos.update((prevTodo) => [...prevTodo, todo]);
    console.log(this._todos());
  }

  get findbyStatus(): Todo[] {
    console.log('findbyStatus',this._findbyStatus());
    console.log('_todos',this._todos());
    return this._findbyStatus();
  }

  override count(): number {
    return this.findbyStatus.length;
  }

  override update(todo: Todo, title:string): void {
    this._todos.update((todosPrevStatus) =>
    todosPrevStatus.map((todo_item) =>
      todo_item.id === todo.id ? { ...todo, isEditing: false, title: title} : todo_item
    )
  );
  }
  override delete(todo: Todo): void {
    this._todos.update((prevTodos) =>
      prevTodos.filter((todo_item) => todo_item.id != todo.id)
    );
  }

  override getFilter(): string {
    return this._filter();
  }
  override setFilter(fiter: StatusFilter): void {
    this._filter.set(fiter);
  }
  override clearCompleted(): void {
    throw new Error('Method not implemented.');
  }
  override toggleCompleted(todo: Todo): void {
    this._todos.update((prevTodos) =>
      prevTodos.map((todo_item) =>
        todo_item.id === todo.id
          ? { ...todo_item, isCompleted: !todo_item.isCompleted }
          : todo_item
      )
    );
  }
  override setEditing(todo: Todo): void {
    this._todos.update((prevTodos) =>
      prevTodos.map((todo_item) =>
        todo_item.id === todo.id
          ? { ...todo_item, isEditing: true }
          : { ...todo_item, isEditing: false }
      )
    );
  }
  override endEditing(): void {
    throw new Error('Method not implemented.');
  }
}
