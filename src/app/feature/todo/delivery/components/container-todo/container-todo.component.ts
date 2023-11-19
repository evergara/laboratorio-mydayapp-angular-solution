import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { TodosComponent } from '../todos/todos.component';
import { FindByStatusUseCase } from '@feature/todo/application/find-by-status-todo.usescases';
import { Todo } from '@feature/todo/domain/model/todo.model';
import { TodoRepository } from '@feature/todo/domain/repository/todo.repository';
import { TodoService } from '@feature/todo/infrastructure/adapter/todo.service';
import { findByStatusUseCaseProvider } from '@core/d-injection/container';

@Component({
  selector: 'app-container-todo',
  standalone: true,
  imports: [CommonModule, FooterComponent, TodosComponent],
  templateUrl: './container-todo.component.html'
})
export class ContainerTodoComponent implements OnInit{

  private findByStatusUseCase = inject(FindByStatusUseCase)
  public todos = this.findByStatusUseCase.execute();

  ngOnInit(): void {
    this.findByStatus();
  }

  findByStatus(): void {
    this.todos =  this.findByStatusUseCase.execute();
    console.log('findByStatus', this.todos)
  }
}
