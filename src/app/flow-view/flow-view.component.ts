import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flow-view',
  templateUrl: './flow-view.component.html',
  styleUrls: ['./flow-view.component.css']
})
export class FlowViewComponent implements OnInit {
  @Input() flow: any;
  constructor() { }

  ngOnInit() {
    console.log(this.flow);
  }

}
