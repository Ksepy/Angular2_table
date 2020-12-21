import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { TestPageComponent } from './test-page/test-page.component';
import { MainComponent } from './main/main.component';
import { Stage1Component } from './main/stage1/stage1.component';
import { Stage2Component } from './main/stage2/stage2.component';
import { Stage3Component } from './main/stage3/stage3.component';
import { MyTableComponent } from './my-table/my-table.component';

const routes: Routes = [
  {path: 'book', component: BookComponent},
  {path: 'test', component: TestPageComponent},
  {path: 'main', component: MainComponent},
  {path: 'main/stage1', component: Stage1Component},
  {path: 'main/stage2', component: Stage2Component},
  {path: 'main/stage3', component: Stage3Component},
  {path: 'my-table', component: MyTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
