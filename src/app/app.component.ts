import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
// import { NgForOf } from "../../node_modules/@angular/common/index";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,RouterOutlet ],
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

  //two-way data binding

  name1: string = "Sudhirkumar";
  name2:string="Sudhir";

  ngif: boolean = true;
  islogin: boolean = true; 
  islogin1: boolean = false;



 //ng For
  city:string[]=['chennai','banglore','mysore'];

  //for
  std:any[]=[
    {
      stdId:1,stdname:"Geet",stdcity:"chennai"
    }
  ]
 
}

