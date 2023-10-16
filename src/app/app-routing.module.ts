import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { SupplierInfoComponent } from './supplier-info/supplier-info.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';

const routes: Routes =[
  {
    path:'',
    component:HomePageComponent
  },
  {
  path: 'login',
  component:HomeComponent
},
{ 
  path: 'add', 
  component: AddComponent 
},
{ 
  path: 'view', 
  component: ViewComponent 
},
{ 
  path: 'search', 
  component: SearchComponent 
},
{ 
  path: 'suppliers', 
  component: SupplierInfoComponent 
},
{
  path: 'add-supplier', 
  component: AddSupplierComponent 
},
{ path: 'edit/:id',
 component: EditAssetComponent },
 {
  path: 'edit-supplier/:id', 
  component: EditSupplierComponent 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
