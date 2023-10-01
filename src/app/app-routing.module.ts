import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'merchandise/:id',canActivate: [AuthGuard], component: MerchandiseComponent},
  { path: 'new', loadChildren: () => import('./new/new.module').then(m => m.NewModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
