import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileComponent } from './file_upload/component/file/file.component';

const routes: Routes = [
  { path: '', redirectTo: 'file', pathMatch: 'full' },
  { path: 'file', component: FileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
