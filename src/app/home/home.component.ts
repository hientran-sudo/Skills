import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerName:string = 'Alex';
  email: string;
  password: string;

  constructor() { }

  onSubmit(form: NgForm){
    console.log(form.value);
  }

  ngOnInit(): void {
  }

}
