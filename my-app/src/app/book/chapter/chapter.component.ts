import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],

})
export class ChapterComponent implements OnInit {

  @Input() public title: string = 'Chapter name default';
  @Input('desc') public description: string  = 'DEFAULT';

  @Output() public chapterEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() {
  }

  ngOnInit(): void {

  }

  public sendData(event: MouseEvent): void {
    this.chapterEvent.emit(event);
  }

}
