import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,
AfterContentInit,AfterContentChecked , AfterViewInit,AfterViewChecked,OnDestroy{
 @Input('svrElement') element:{type:string,name:string,content:string};
  constructor(){
    console.log("Constructor called")
  }
  ngOnInit(){
    console.log("On Init called")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes called")
    console.log(changes)
  }
  ngDoCheck(): void {
      console.log("Do Check Called");
  }
  ngAfterContentInit(): void {
    console.log("After ContentInit called");
  }
  ngAfterContentChecked(): void {
    console.log("After Content Checked called");
  }
  ngAfterViewInit(): void {
    console.log("After View Init called");
  }
  ngAfterViewChecked(): void {
    console.log("After After View Checked called");
  }
  ngOnDestroy(): void {
    console.log("On Destroy is called");
  }

}
