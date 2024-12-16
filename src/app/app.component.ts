import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Mi primera aplicación de Angular';
  counter = 10;

  increaseBy(value: number): void{
    this.counter += value;
  }

  resetCounter(): void{
    this.counter = 10;
  }
}
