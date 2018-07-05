import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//composants
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { StudentComponent } from './student/student.component';
import { ListStudentComponent } from './list-student/list-student.component';

//Services
import { StudentService } from './services/student.service';



@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    StudentComponent,
    ListStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
