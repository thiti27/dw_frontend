import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  lat: number = 52.358;
  lng: number = 4.916;
  constructor() { }

  ngOnInit(): void {
  }

}
