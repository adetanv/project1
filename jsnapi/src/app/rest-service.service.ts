import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {
  url = 'http://localhost:3000/user'
  constructor(private http: HttpClient) { }
  getListOfData() {
    return this.http.get(this.url);

  }

}
