import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() produs: any;

  constructor() { }

  ngOnInit() {
    
  }

}
