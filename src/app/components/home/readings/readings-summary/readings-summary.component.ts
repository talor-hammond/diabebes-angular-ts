import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readings-summary',
  templateUrl: './readings-summary.component.html',
  styleUrls: ['./readings-summary.component.css']
})
export class ReadingsSummaryComponent implements OnInit {
  isOpen: boolean = false

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown(isShown: boolean) {
    console.log('lol')
  }

}
