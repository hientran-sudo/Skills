import { NgIf } from "@angular/common";
//import { Component, Input } from "@angular/core";
//import { Component, Output, EventEmitter } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
declare const genRandomNumbers:any;
interface JSP {
    userID: string;
    id:string;
    title:string;
    completed:boolean;
}
@Component({
    selector: 'app-product',
    template:
            `<div id="display" *ngFor="let todo of todos">
            <div>User ID: {{todo.userID}} ID: {{todo.id}} </div>
            </div>`,
            //`<h2>Product List</h2>`,
            //<label>Add new product
            //<input #newProduct></label>
            //<button (click) ="addProduct(newProduct.value)">Add</button>`,
              
            //<div>{{p_title}}</div>`,
            //<div>{{rNum}}</div>`,
            //----------------------
            //`<h2>Product List</h2>
            //<div *ngFor="let x of rNum | paginate: {itemsPerPage: itemsToDisplay, currentPage:page}">
            //{{x | classify}}</div>
            //<pagination-controls (pageChange)="pageChanged($event)"></pagination-controls>`,
            //'<li *ngFor="let dept of departments">{{dept}}</li>',
            //'<li *ngFor="let employee of employees">{{employee.name}}</li>',
    styles: ['div {font-weight:bolder; color:darkgreen;}']
            //['li {color: purple; margin-top: 10px; font-size: 1.5emA}']
   
})

export class ProductComponent implements OnInit{
    todos:JSP[];
    constructor(private http:HttpClient){

    }
    ngOnInit(): void {
        this.http.get<JSP[]>("https://jsonplaceholder.typicode.com/todos").subscribe(data =>{
            console.log(data);
        });
    }

    // -------VIEWCHILD
    //instock:number = 10;
    //childMethod() {
    //    console.log('A method in the Product Component - the child');
    //}
    // -------PASS DATA FROM CHILD TO PARENT
    //@Output() c_newProductEvent = new EventEmitter<string>();
    //addProduct(value:string){
    //    this.c_newProductEvent.emit(value);
    //}
    // -------NESTED COMPONENT
    //@Input() p_title:string | undefined;
    // SORT
    //rNum = <[]>genRandomNumbers().sort(function(x:number,y:number){
    //    return x-y
    //});
    // -------FILTER 
    //rNum = <[]>genRandomNumbers().filter((x:number) => x < 2000);
    //page: number = 1;
    //itemsToDisplay: number = 10;

    //pageChanged(event:any){
    //    this.page = event;
//
    //}
    // -------ARRAY AND OBJECT
    //departments = ["Bicycles","Car","Boat"];
    //employees = [
    //    {
    //        name: "Alex",
    //        employeeID: 1234,
    //        department: "IT"
    //    },
    //    {
    //        name: "Peter",
    //        employeeID: 1234,
    //        department: "IT"
    //    },
    //    {
    //        name: "Mike",
    //        employeeID: 1234,
    //        department: "IT"
    //    }
    //];
}