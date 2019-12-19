import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCompModule } from '../test-comp/test-comp.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TestCompModule],
  exports: [TestCompModule]
})
export class SharedModule {}
