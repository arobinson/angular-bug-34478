import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCompModule } from './test-comp/test-comp.module';
import { AppRoutingModule } from './app-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TestCompModule, AppRoutingModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
