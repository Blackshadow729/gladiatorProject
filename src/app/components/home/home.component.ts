import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  FirstName: string = "Dibyajyoti";
  LastName: string = "Ghosh";
  Age: number = 22;
  Gender: string = "Male";
  constructor() { }

  ngOnInit(): void {
  }

}
