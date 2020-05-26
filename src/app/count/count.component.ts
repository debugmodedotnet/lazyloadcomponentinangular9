import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  template: `
    <p>
      count works!
    </p>
  `,
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
