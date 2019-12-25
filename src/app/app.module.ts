import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadDirective } from './file_upload/directive/file-upload.directive';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FileComponent } from './file_upload/component/file/file.component';
import { FileService } from './file_upload/service/file.service';
import { QuilllModule } from './quill/quilll.module';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadDirective,
    FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuilllModule,
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
