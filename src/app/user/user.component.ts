import { Component } from "@angular/core";

@Component({
    selector:'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent{
    clickMessage = '';
    values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value;
  }
    onClickMe(){
        this.clickMessage = 'Clicked';
        // alert('heloo')
    }
}