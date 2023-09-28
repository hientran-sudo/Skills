import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { ProductComponent } from './../products/product.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    //CommonModule,
    SharedModule
  ],
  exports :[
    ProductComponent
  ]
})
export class ProductsFeatureModule { }
