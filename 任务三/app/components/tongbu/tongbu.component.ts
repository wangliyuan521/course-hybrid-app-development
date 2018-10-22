import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {
 
  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  courses;
  ngOnInit() {
    //参数快照
    // this.courseId = this.router.snapshot.params['courseId'];
    //参数订阅
    this.router.params.subscribe((params)=>{
      this.courseId = params['courseId'];
    });
    this.http.get('/api/courses').subscribe(data=>{
      this.courses=data;
    })
  }

  go(){
    //js跳转
    this.route.navigate(['/tongbu',600],{queryParams:{id:1000}});
  }

}
