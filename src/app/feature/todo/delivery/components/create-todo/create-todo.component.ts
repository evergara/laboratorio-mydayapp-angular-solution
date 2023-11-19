import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTodoUseCase } from '@feature/todo/application/create-todo-usecases';
import { TodoMapper } from '@feature/todo/infrastructure/mapper/todo-mapper';
import { TodoRepository } from '../../../domain/repository/todo.repository';
import { TodoService } from '@feature/todo/infrastructure/adapter/todo.service';
import { todoUseCaseProvider } from '@core/d-injection/container';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-todo.component.html'
})

export class CreateTodoComponent {
  inputTodo = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)],
  });

  private mapper: TodoMapper;

  constructor(private useCase: CreateTodoUseCase){
    this.mapper = new TodoMapper();
  }

  addTodo(): void {
    const title = this.inputTodo.value.trim();
    if(this.inputTodo.invalid || title === '')return;

    this.useCase.execute(this.mapper.mapFrom(title));
    this.cleanForm();
  }

  private cleanForm(): void {
    this.inputTodo.setValue('');
  }
}
