import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import {Student} from '../../interface/student.interface';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: any[] = [];
  editMode: boolean = false;
  generalAverage: number = 0;

  constructor(private studentService: StudentService) { }

  // Lifecycle hook, ngOnInit s'exécute au chargement du composant
  ngOnInit() {
    this.studentService
      .getStudents()
      .subscribe(res => {
        this.students = res;
        this.studentService.setStudents(res);
        console.log (this.studentService.getGEneralAverage());

        //caclul de la moyenne générale
        let total = 0;
        let nbNotes = 0;
        this.students.forEach (student => {
          //console.log(student.notes);
          student.notes.forEach(note =>{
          total += note;
        })
        nbNotes += student.notes.length;
        //return total
      })
      this.generalAverage = total / nbNotes;
      });
  }

  changeEditMode(e) {
    this.editMode = !this.editMode;
  }

  noteChange() {
    console.log('Mon enfant me parle');
    console.log =this.studentService.getGEneralAverage();

  }
}
