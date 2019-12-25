import { NgModule } from '@angular/core';
import { QuillComponent } from './quill/quill.component';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [QuillComponent],
  imports: [
    QuillModule.forRoot(),
    ReactiveFormsModule,
  ]
})
export class QuilllModule { }
