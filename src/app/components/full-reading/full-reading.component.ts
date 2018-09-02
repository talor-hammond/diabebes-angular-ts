import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReadingsService } from '../shared/readings-service/readings.service'

@Component({
  selector: 'app-full-reading',
  templateUrl: './full-reading.component.html',
  styleUrls: ['./full-reading.component.css']
})
export class FullReadingComponent implements OnInit {
  // to get the index parameter, we need access to the ActivatedRoute obj
  private route: ActivatedRoute 
  private readingsService: ReadingsService

  constructor(readingsService: ReadingsService, route: ActivatedRoute) { 
    this.route = route
  }

  ngOnInit() { 
    const { index } = this.route.params.value
  }

}
