import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComp2RoutingModule } from './test-comp2-routing.module';
import { TestComp2Component } from './test-comp2.component';
import { FroalaViewModule, FroalaEditorModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [TestComp2Component],
  imports: [FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), CommonModule, TestComp2RoutingModule]
})
export class TestComp2Module {}
