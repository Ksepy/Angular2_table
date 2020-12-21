import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BookComponent } from './book/book.component';
import { ChapterComponent } from './book/chapter/chapter.component';
import { AppRoutingModule } from './app-routing.module';
import { TestPageComponent } from './test-page/test-page.component';
import { MainComponent } from './main/main.component';
import { Stage1Component } from './main/stage1/stage1.component';
import { Stage2Component } from './main/stage2/stage2.component';
import { Stage3Component } from './main/stage3/stage3.component';
import { MyTableComponent } from './my-table/my-table.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BookComponent,
    ChapterComponent,
    TestPageComponent,
    MainComponent,
    Stage1Component,
    Stage2Component,
    Stage3Component,
    MyTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
