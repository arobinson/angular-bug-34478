import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCompComponent } from './test-comp.component';
import { TestCompRoutingModule } from './test-comp-routing.module';

@NgModule({
  declarations: [TestCompComponent],
  imports: [CommonModule, TestCompRoutingModule]
})
export class TestCompModule {}
