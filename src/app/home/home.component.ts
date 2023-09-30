import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerName:string = 'Alex';
  email: string;
  password: string;
  data$: Observable<any>;

  constructor(private http:HttpClient) {
    this.data$ = http.get('http://localhost:3000/customers');
   }

  onSubmit(form: NgForm){
    //console.log(form.value);
    //this.http.post("http://localhost:3000/customers", form.value).subscribe();
  }

  deleteDocument(){
    this.http.delete("http://localhost:3000/customers/4").subscribe();
  }

  ngOnInit(): void {
    this.data$.subscribe();
  }

}
