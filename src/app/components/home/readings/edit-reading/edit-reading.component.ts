import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-reading',
  templateUrl: './edit-reading.component.html',
  styleUrls: ['./edit-reading.component.css']
})
export class EditReadingComponent implements OnInit {
  @Input() index: number

  constructor() { }

  ngOnInit() {
    console.log('modal open with index: ', this.index)
  }

}
