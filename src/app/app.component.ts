import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First_Project';

  isvalid:boolean = true;

  //string interpolation
  name: string = 'Nanthakumar';
  role: string = 'Software Developer';
  age: number = 25;

  isdisabled: boolean = false;
  isactive: boolean = true;
}
