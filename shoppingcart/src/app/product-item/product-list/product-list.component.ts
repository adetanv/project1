import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from 'src/app/clasees/Product';
declare var $:any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  constructor(public httpMod:HttpClient) { }
  data:any=[];
  data1:any=[];
    

 
  ngOnInit(): void {
  
    this.httpMod.get<Product[]>('assets/Products.json').subscribe(res=>{
     console.log(res);
     this.data = res;
     console.log(this.data);
     for(var i=0;i<this.data.length;i++){
      if (i>this.data.length/2-1){
        this.data1.push(this.data[i]);
      }
     }
     
  var c = this.data.length;
     for(var i=0;i<c;i++){
      if (i>c%2){
        this.data.splice(i,1);
      }
     }
     console.log(this.data);
     console.log(this.data1);
   });
  

   
  }

 

}
