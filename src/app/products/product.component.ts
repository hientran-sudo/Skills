import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
declare const genRandomNumbers:any;

@Component({
    selector: 'app-product',
    template: `<h2>Product List</h2>
               <div>{{p_title}}</div>`,
              // <div>{{rNum}}</div>`,
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

export class ProductComponent{
    // NESTED COMPONENT
    @Input() p_title:string | undefined;
    // SORT
    //rNum = <[]>genRandomNumbers().sort(function(x:number,y:number){
    //    return x-y
    //});
    // FILTER 
    //rNum = <[]>genRandomNumbers().filter((x:number) => x < 2000);
    //page: number = 1;
    //itemsToDisplay: number = 10;

    //pageChanged(event:any){
    //    this.page = event;
//
    //}
    // ARRAY AND OBJECT
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