import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComp2Component } from './test-comp2.component';

const routes: Routes = [{ path: '', component: TestComp2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestComp2RoutingModule { }
