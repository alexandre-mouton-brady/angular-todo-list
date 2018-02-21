import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.template.html',
  styleUrls: ['header.style.styl'],
})
export class HeaderComponent implements OnInit {
  now: Date;
  interval: any;

  constructor() {
    this.now = new Date();
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
