import { Todo } from "../model/todo.model";
import { StatusFilter } from "../type/status-filter.type";

export abstract class TodoRepository {
  abstract create(todo: Todo): void;
  abstract update(todo: Todo, title:string): void;
  abstract delete(todo: Todo): void;
  abstract get findbyStatus(): Todo[];
  abstract getFilter(): string;
  abstract setFilter(fiter:StatusFilter): void;
  abstract clearCompleted(): void;
  abstract toggleCompleted(todo: Todo): void;
  abstract setEditing(todo: Todo): void;
  abstract endEditing(): void;
  abstract count(): number;
}
