import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { StudentService } from '../services/student.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        // en attente this.studentService.getStudent()
        return this.studentService
        .getStudent(parseInt(params.get('id')))
      })
    )
    .subscribe(res => console.log(res));
  }

}
