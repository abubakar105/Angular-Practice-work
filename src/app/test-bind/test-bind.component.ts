import { Component } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styleUrl: './test-bind.component.css'
})
export class TestBindComponent {
  title = 'app';
  status='offline';
  allow=false;
  name=''
  constructor(){
    this.status=Math.random()>.5 ?'online' : 'offline'
  }
  onType(event:Event){
    this.name=(<HTMLInputElement>event.target).value
  }
  getColor(){
    return this.status==='offline' ? 'red' : 'green'
  }
  resetName(){
    this.name=''
    this.allow=true
  }

  friendslist = [
    {
      name: 'Nishant',
      age: 25
    },
    {
      name: 'Shailesh',
      age: 45
    },
    {
      name: 'Abhishek',
      age: 36
    },
    {
      name: 'Akshay',
      age: 65
    },
    {
      name: 'Ashish',
      age: 12
    },
    {
      name: 'Uday',
      age: 31
    },
    {
      name: 'Mayank',
      age: 45
    },
    {
      name: 'Raju',
      age: 74
    },
  ]
}
