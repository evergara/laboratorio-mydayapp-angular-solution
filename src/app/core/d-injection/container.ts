import { CreateTodoUseCase } from "@feature/todo/application/create-todo-usecases";
import { FindByStatusUseCase } from "@feature/todo/application/find-by-status-todo.usescases";
import { TodoRepository } from "@feature/todo/domain/repository/todo.repository";

const todoUseCaseFactory = (todoRepository: TodoRepository) => new CreateTodoUseCase(todoRepository);
export const todoUseCaseProvider = {
  provide: CreateTodoUseCase,
  useFactory: todoUseCaseFactory,
  deps: [TodoRepository]
};

const findByStatusUseCaseFactory = (todoRepository: TodoRepository) => new FindByStatusUseCase(todoRepository);
export const findByStatusUseCaseProvider = {
  provide: FindByStatusUseCase,
  useFactory: findByStatusUseCaseFactory,
  deps: [TodoRepository]
};



