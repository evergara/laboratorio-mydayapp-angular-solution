import { TodoRepository } from '@feature/todo/domain/repository/todo.repository';

export class FindByStatusUseCase {

  constructor(private todoRepository: TodoRepository) { }

  execute(){
    return this.todoRepository.findbyStatus;
  }
}
