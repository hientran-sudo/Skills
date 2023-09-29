import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
declare const genRandomNumbers:any;

@Component({
    selector: 'app-product',
    template: //`<h2>Product List</h2>
              // <div>Product 1</div>
              // <div>{{rNum}}</div>`,
               `<h2>Product List</h2>
               <div *ngFor="let x of rNum | paginate: {itemsPerPage: itemsToDisplay, currentPage:page}">
               {{x}}</div>
               <pagination-controls (pageChange)="pageChanged($event)"></pagination-controls>`,
              //'<li *ngFor="let dept of departments">{{dept}}</li>',
              //'<li *ngFor="let employee of employees">{{employee.name}}</li>',
    styles: ['div {font-weight:bolder; color:darkgreen;}']
            //['li {color: purple; margin-top: 10px; font-size: 1.5emA}']
   
})

export class ProductComponent{
    //showDiv=true;
    rNum = <[]>genRandomNumbers().sort(function(x:number,y:number){
        return x-y
    });
    page: number = 1;
    itemsToDisplay: number = 10;

    pageChanged(event:any){
        this.page = event;

    }
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