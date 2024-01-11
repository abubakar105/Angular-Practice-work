import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../model/author.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
    number=0;
  public obj:AuthorModel={id:1,name:"abc"}
    addNumber(){
      this.number+=1
      this.obj.id=3
    }
    
    subNumber(){
      this.number-=1;
    }
    constructor(){
      console.log("Hyy From Constructor Of Parent")
    }
    ngOnInit(): void {
      console.log("Hyy From OnInit Of Parent")
    }
}
