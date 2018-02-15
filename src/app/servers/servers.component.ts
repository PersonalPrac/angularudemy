import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',     // Typically use this stle for component selector
  // selector: '[app-servers]', -- Select by app-servers as attribute selector
  // selector:'.app-servers',     // Select by app-servers as CSS class attribute value selector
  /* template: `
              <app-server></app-server>
              <app-server></app-server>`,
   */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'NO server was created';
  serverName = 'Inital Server';
  serverCreated = false;
  servers =  ['firstServer', 'secondServer'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created';
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
