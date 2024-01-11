import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AuthorModel } from '../model/author.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,OnChanges  {
  @Input() numberCopy:number;
  @Input() author:AuthorModel;
  name="abc"

  constructor(){
    console.log("Hyy From Constructor Of Child")
  }
  ngOnInit(): void {
    console.log("Hyy From OnInit Of Child")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Hyy From Changes Of Child")
    console.log(changes)
  }

}
