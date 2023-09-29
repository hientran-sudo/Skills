import { Component, ViewChild} from '@angular/core';
import { ProductComponent } from './products/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Skills';
  // -------VIEWCHILD
  quantity:number = 0;
  @ViewChild(ProductComponent) product: ProductComponent;
  ngAfterViewInit(){
    this.product.childMethod();
    this.quantity=this.product.instock;
    console.log(this.quantity);
  }
  // -------PASS DATA FROM CHILD TO PARENT
  //p_addProduct(newProduct:string){
  //  console.log(newProduct);

  }

