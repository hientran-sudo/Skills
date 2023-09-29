import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product.component';
//import { ProductsFeatureModule } from './products-feature/products-feature.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClassifyPipe } from './classify.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ClassifyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ProductsFeatureModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
