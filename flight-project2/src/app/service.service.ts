import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(public http:HttpClient) { }
  getoffers(){
    return this.http.get<any>('http://localhost:3000/offers')
  }
  getregular(){
    return this.http.get<any>('http://localhost:3000/regular') 
  }
  getinfo(){
    return this.http.get<any>('http://localhost:3000/info')
  }
}
