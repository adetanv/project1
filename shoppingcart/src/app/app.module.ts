import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-item/product-list/product-list.component';
import { FiltersComponent } from './filters/filters.component';
import { HomeComponent } from './home/home.component';
import { TemplateContainerComponent } from './template-container/template-container.component';
import { AboutComponent } from './about/about.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SpecialoffersComponent } from './specialoffers/specialoffers.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { GalleryComponent } from './gallery/gallery.component';
import {HttpClientModule} from '@angular/common/http'
import { Carousel } from 'mdb-ui-kit';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    ProductListComponent,
    FiltersComponent,
    HomeComponent,
    TemplateContainerComponent,
    AboutComponent,
    InventoryComponent,
    SpecialoffersComponent,
    LogisticsComponent,
    GalleryComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
