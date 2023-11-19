import { TodoRepository } from '@feature/todo/domain/repository/todo.repository';
import { StatusFilter } from '../domain/type/status-filter.type';

export class FilterUseCase {

  constructor(private todoRepository: TodoRepository) { }

  getFilter(){
    return this.todoRepository.getFilter();
  }

  setFilter(filter:StatusFilter){
    return this.todoRepository.setFilter(filter);
  }
}
