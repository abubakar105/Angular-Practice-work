import { Component,EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrl: './cokpit.component.css'
})
export class CokpitComponent {
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput
  @Output() serverAdd=new EventEmitter<{serverName:string,serverContent:string}>()
  @Output() bluePrintAdd=new EventEmitter<{serverName:string,serverContent:string}>()

  onAddServer(){
    this.serverAdd.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }
  onAddBlueprint(){
    this.bluePrintAdd.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }
}
