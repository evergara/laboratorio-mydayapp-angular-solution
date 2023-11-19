import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { ContainerTodoComponent } from '../components/container-todo/container-todo.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ContainerTodoComponent],
  templateUrl: './todo.component.html'
})
export default class TodoComponent {

}
