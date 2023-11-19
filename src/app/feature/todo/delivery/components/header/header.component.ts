import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTodoComponent } from '../create-todo/create-todo.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CreateTodoComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public readonly TITLE = 'My Day';
  public readonly DESCRIPTION = 'All my tasks in one place';
}
