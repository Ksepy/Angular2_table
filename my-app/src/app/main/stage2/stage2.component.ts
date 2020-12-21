import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stage2',
  templateUrl: './stage2.component.html',
  styleUrls: ['./stage2.component.scss']
})


export class Stage2Component implements OnInit {

  @Input() public title: string = 'Stage 2';

  constructor() {
  }

  ngOnInit(): void {
  }
}
