import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
declare const genRandomNumbers:any;

@Component({
    selector: 'app-product',
    template: //`<h2>Product List</h2>
              // <div>Product 1</div>
              // <div>{{rNum}}</div>`
              //'<li *ngFor="let dept of departments">{{dept}}</li>',
                '<li *ngFor="let employee of employees">{{employee.name}}</li>',
    styles: //['div {font-weight:bolder; color:darkgreen;}']
              ['li {color: purple; margin-top: 10px; font-size: 1.5emA}']
   
})

export class ProductComponent{
    //showDiv=true;
    rNum = <[]>genRandomNumbers();
    departments = ["Bicycles","Car","Boat"];
    employees = [
        {
            name: "Alex",
            employeeID: 1234,
            department: "IT"
        },
        {
            name: "Peter",
            employeeID: 1234,
            department: "IT"
        },
        {
            name: "Mike",
            employeeID: 1234,
            department: "IT"
        }

    ];
}