import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http:HttpClient ) { }
  course;
  headers = new HttpHeaders( {} );
  ngOnInit() {
    //this.http.get('/api/courses').subscribe((data)=>{console.log(data);})
    this.http.get('/api/courses',null).subscribe((data)=>{console.log(data);});
    this.http.post( '/api',{name:'liuguanjun',pwd:123}, {headers:this.headers} ).subscribe((data)=>{console.log(data);});

  }

}
