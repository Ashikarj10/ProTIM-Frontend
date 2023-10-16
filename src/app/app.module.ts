import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { SupplierInfoComponent } from './supplier-info/supplier-info.component';
import { FormsModule } from '@angular/forms';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditAssetComponent } from './edit-asset/edit-asset.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component'; // Import ReactiveFormsModule



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    AddComponent,
    ViewComponent,
    SearchComponent,
    SupplierInfoComponent,
    AddSupplierComponent,
    EditAssetComponent,
    EditSupplierComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
