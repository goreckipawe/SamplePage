import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  time: string;

  @Output() public sidenavToggle = new EventEmitter();

  constructor() {
    setInterval(() => {
        const currentDate = new Date();
        this.time = currentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
