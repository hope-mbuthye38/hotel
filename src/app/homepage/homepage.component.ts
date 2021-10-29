import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  destination: any;
  ngOnInit(): void {
    this.destination = this.http.get("http://127.0.0.1:8000/api/destination/").subscribe(
      data => this.destination = data
    )

  }
  
}


