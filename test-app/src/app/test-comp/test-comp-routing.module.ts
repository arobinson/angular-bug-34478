import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCompComponent } from './test-comp.component';

const routes: Routes = [{ path: '', component: TestCompComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestCompRoutingModule {}
