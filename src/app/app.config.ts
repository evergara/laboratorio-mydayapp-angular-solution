import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { findByStatusUseCaseProvider, todoUseCaseProvider } from '@core/d-injection/container';
import { TodoRepository } from '@feature/todo/domain/repository/todo.repository';
import { TodoService } from '@feature/todo/infrastructure/adapter/todo.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    findByStatusUseCaseProvider,
    todoUseCaseProvider,
    {provide: TodoRepository, useClass: TodoService}]
};
