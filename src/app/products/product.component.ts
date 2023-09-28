import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
declare const genRandomNumbers:any;

@Component({
    selector: 'app-product',
    template: `<h2>Product List</h2>
               <div>Product 1</div>
               <div>{{rNum}}</div>`,
    styles: ['div {font-weight:bolder; color:darkgreen;}']
   
})

export class ProductComponent{
    //showDiv=true;
    rNum = <[]>genRandomNumbers();

}