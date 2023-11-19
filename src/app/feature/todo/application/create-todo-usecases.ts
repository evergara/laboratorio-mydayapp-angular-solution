import { Todo } from "../domain/model/todo.model";
import { TodoRepository } from "../domain/repository/todo.repository";

export class CreateTodoUseCase {

  constructor(private todoRepository: TodoRepository) { }

  execute(todo: Todo): void {
    return this.todoRepository.create(todo);
  }
}
