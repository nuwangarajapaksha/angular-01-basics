import { CourseService } from './courses.service';
import { Component } from '@angular/core';

//01
// @Component({
//   selector: 'courses',
//   template: '<h2>Courses</h2>'
// })
// export class CoursesComponent {
// }

//02
// @Component({
//   selector: 'courses',
//   template: '<h2>{{"Title: " + title}}</h2>'
// })
// export class CoursesComponent {
//   title = 'List of courses';
// }

//03
// @Component({
//   selector: 'courses',
//   template: '<h2>{{getTitle()}}</h2>'
// })
// export class CoursesComponent {
//   title = 'List of courses';
//   getTitle() {
//     return this.title;
//   }
// }

//04
// @Component({
//   selector: 'courses',
//   template: `
//     <h2>{{ title }}</h2>
//     <ul>
//       <li *ngFor="let course of courses">
//         {{ course }}
//       </li>
//     </ul>
//   `
// })
// export class CoursesComponent {
//   title = 'List of courses';
//   courses = ['course1', 'course2', 'course3'];
// }

//05
// @Component({
//   selector: 'courses',
//   template: `
//     <h2>{{ title }}</h2>
//     <ul>
//       <li *ngFor="let course of courses">
//         {{ course }}
//       </li>
//     </ul>
//   `,
// })
// export class CoursesComponent {
//   title = 'List of courses';
//   courses: any;
// }

//06
// @Component({
//   selector: 'courses',
//   template: `
//     <h2>{{ title }}</h2>
//     <ul>
//       <li *ngFor="let course of courses">
//         {{ course }}
//       </li>
//     </ul>
//   `,
// })
// export class CoursesComponent {
//   title = 'List of courses';
//   courses;

//   constructor() {
//     let service = new CourseService();
//     this.courses = service.getCourse();
//   }
// }

//07
@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;

  constructor(service: CourseService) {
    this.courses = service.getCourse();
  }
}
