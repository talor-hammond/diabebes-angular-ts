import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ReadingsService } from '../shared/readings-service/readings.service'

import { Reading } from '../home/readings/reading.model'

@Component({
  selector: 'app-full-reading',
  templateUrl: './full-reading.component.html',
  styleUrls: ['./full-reading.component.css']
})
export class FullReadingComponent implements OnInit {
  index: number
  reading: Reading

  private route: ActivatedRoute // to get the index parameter, we need access to the ActivatedRoute obj
  private readingsService: ReadingsService

  constructor(readingsService: ReadingsService, route: ActivatedRoute) { 
    this.readingsService = readingsService
    this.route = route
  }

  ngOnInit() { 
    // const index = Number(this.route.params.value.index)

    this.route.params.subscribe((params: Params) => {
        this.index = Number(params['index'])
      })

    this.reading = this.readingsService.getReadingByIndex(this.index)
  }

}
