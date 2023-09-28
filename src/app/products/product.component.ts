import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
declare const genRandomNumbers:any;

@Component({
    selector: 'app-product',
    template: //`<h2>Product List</h2>
              // <div>Product 1</div>
              // <div>{{rNum}}</div>`
              '<li *ngFor="let dept of departments">{{dept}}</li>',
    styles: //['div {font-weight:bolder; color:darkgreen;}']
              ['li {color: purple; margin-top: 10px; font-size: 1.5emA}']
   
})

export class ProductComponent{
    //showDiv=true;
    rNum = <[]>genRandomNumbers();
    departments = ["Bicycles","Car","Boat"];

}