import { TodoRepository } from '@feature/todo/domain/repository/todo.repository';

export class CountTodoUseCase {

  constructor(private todoRepository: TodoRepository) { }

  execute(){
    return this.todoRepository.count();
  }
}
