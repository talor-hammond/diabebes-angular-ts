import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {
  name: String

  constructor() {
    this.name = 'Talor'
  }

  ngOnInit() {
  }

}
