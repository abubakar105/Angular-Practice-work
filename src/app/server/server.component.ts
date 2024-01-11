import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  allow=true;
  serverName=''
  eventClicked() {
    alert('sadsa')
  }
  onUpdateServer(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value; 
    console.log(event)
  }
}
