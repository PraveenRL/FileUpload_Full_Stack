import { NgModule } from '@angular/core';
import { QuillComponent } from './quill/quill.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [QuillComponent],
  imports: [
    QuillModule
  ]
})
export class QuilllModule { }
