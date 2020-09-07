import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  collection = {}

  constructor(private rest: RestServiceService) { }
  
  ngOnInit(): void {
    this.rest.getListOfData().subscribe((i)=>{
    console.warn(i)
    this.collection = i;
    })
  
}

}
