import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  public chapterNames: string[] = ['Second chapter'];
  public chapterDesc: string = 'Chapter same description';

  constructor() { }

  ngOnInit(): void {
  }

  public getChapterName(): string {
    return 'Third chapter';
  }

  public show(event: MouseEvent): void {
    console.log(event);
  }
}
