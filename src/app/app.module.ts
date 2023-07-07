import { CourseService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.components';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent, CourseComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
