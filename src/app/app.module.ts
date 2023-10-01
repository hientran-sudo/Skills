import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product.component';
//import { ProductsFeatureModule } from './products-feature/products-feature.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClassifyPipe } from './classify.pipe';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MerchandiseComponent } from './merchandise/merchandise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ClassifyPipe,
    MerchandiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ProductsFeatureModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
