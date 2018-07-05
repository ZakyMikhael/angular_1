import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';


//composants
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { StudentComponent } from './student/student.component';
import { ListStudentComponent } from './list-student/list-student.component';



//Services
import { StudentService } from './services/student.service';
import { MenuComponent } from './menu/menu.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';

// table de routage
const appRoutes: Routes = [
  {path: '',  component: ListStudentComponent},
  {path: 'intro',  component: IntroComponent},
  {path: 'students',  component: ListStudentComponent},
  {path: 'students/:id',  component: DetailStudentComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    StudentComponent,
    ListStudentComponent,
    MenuComponent,
    DetailStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
