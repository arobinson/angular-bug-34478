import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./test-comp/test-comp.module').then((m) => m.TestCompModule) },
  { path: 'test-comp', loadChildren: () => import('./test-comp/test-comp.module').then((m) => m.TestCompModule) },
  { path: 'test-comp2', loadChildren: () => import('./test-comp2/test-comp2.module').then((m) => m.TestComp2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
