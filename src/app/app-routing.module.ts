import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileComponent } from './file_upload/component/file/file.component';
import { QuillComponent } from './quill/quill/quill.component';

const routes: Routes = [
  { path: '', redirectTo: 'quill', pathMatch: 'full' },
  { path: 'file', component: FileComponent },
  { path: 'quill', component: QuillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
