import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() oddNum:any;  // inputing oddNum from app component
    constructor() { }
  
    ngOnInit() {
    }
  
  }
