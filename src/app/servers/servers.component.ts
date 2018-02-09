import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',     // Typically use this stle for component selector
  //selector: '[app-servers]', -- Select by app-servers as attribute selector
  //selector:'.app-servers',     // Select by app-servers as CSS class attribute value selector
  /* template: `
              <app-server></app-server> 
              <app-server></app-server>`,
   */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
