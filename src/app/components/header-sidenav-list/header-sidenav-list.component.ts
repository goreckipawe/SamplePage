import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-sidenav-list',
  templateUrl: './header-sidenav-list.component.html',
  styleUrls: ['./header-sidenav-list.component.scss']
})
export class HeaderSidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
