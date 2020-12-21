import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stage3',
  templateUrl: './stage3.component.html',
  styleUrls: ['./stage3.component.scss']
})


export class Stage3Component implements OnInit {

  @Input() public title: string = 'Stage 3';

  constructor() {
  }

  ngOnInit(): void {
  }
}
