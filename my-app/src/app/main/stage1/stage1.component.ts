import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stage1',
  templateUrl: './stage1.component.html',
  styleUrls: ['./stage1.component.scss']
})

export class Stage1Component implements OnInit {

  @Input() public title: string = 'Stage 1';

  constructor() {
  }

  ngOnInit(): void {
  }
}
