import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor() { }
  modalImage: string;
  ngOnInit(): void {
    $('.venobox').venobox();
  }
  

  changeModal(imgUrl:any){
    this.modalImage=imgUrl;
  }
    
  }




