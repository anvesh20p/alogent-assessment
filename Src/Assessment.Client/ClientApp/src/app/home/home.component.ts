import { Component, OnInit } from '@angular/core';
import { Board } from '../models/board';
import { PostIt } from '../models/post-it';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  boards: Board[];
  postIt: PostIt[];

  constructor(private http: HttpClient) {

   }

  ngOnInit() {
   /*  this.http.get<Board[]>('/api/boards').subscribe(data => {
      this.boards = data;
    }); */
    this.boards = [{"Id":1,"CreatedAt":"2018-04-12T20:10:28.3910465-04:00","Name":"Board #1","post": []},{"Id":2,"CreatedAt":"2018-04-17T20:10:28.3939263-04:00","Name":"Board #2", "post":[]},{"Id":3,"CreatedAt":"2018-04-18T20:10:28.3939278-04:00","Name":"Board #3","post":[]}];
    let postIt1 = new PostIt();
    postIt1.title = "Tutorial 1";
    postIt1.information = "Angular 5";
    postIt1.createdAt = "2018-09-09T20:10:28.3910465-04:00"

    this.boards[0].post.push(postIt1);

    let postIt2 = new PostIt();
    postIt2.title = "Tutorial 2";
    postIt2.information = "Angular 6";
    postIt2.createdAt = "2018-09-06T20:10:28.3910465-04:00"
    this.boards[0].post.push(postIt2);


    let postIt3 = new PostIt();
    postIt3.title = "Spring Boot Reference";
    postIt3.information = "https://spring.io/";
    postIt3.createdAt = "2018-09-06T20:10:28.3910465-04:00"
    this.boards[1].post.push(postIt3);

    let postIt4 = new PostIt();
    postIt4.title = "Angular Reference";
    postIt4.information = "https://angular.io/";
    postIt4.createdAt = "2018-09-06T20:10:28.3910465-04:00"
    this.boards[1].post.push(postIt4);

    let postIt5 = new PostIt();
    postIt5.title = "Bootstrap Reference";
    postIt5.information = "https://getbootstrap.com/";
    postIt5.createdAt = "2018-09-06T20:10:28.3910465-04:00"
    this.boards[2].post.push(postIt5);
   
    //this.postIt = [{"Id":1,"CreatedAt":"2018-04-12T20:10:28.3910465-04:00","Name":"Board #1"},{"Id":2,"CreatedAt":"2018-04-17T20:10:28.3939263-04:00","Name":"Board #2"},{"Id":3,"CreatedAt":"2018-04-18T20:10:28.3939278-04:00","Name":"Board #3"}];
  }
}
