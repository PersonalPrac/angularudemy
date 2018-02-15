import { Component } from '@angular/core';




@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    status = 'offline';

    constructor() {
        this.status = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus(): string {
        return this.status;
    }

    getColor(): string {
        return   (this.getServerStatus() === 'online') ? 'green' : 'red';
    }
}
