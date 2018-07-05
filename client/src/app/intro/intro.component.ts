import {Component} from '@angular/Core';
import {Student} from './interface/student.interface';
import { HttpClient } from '@angular/common/http';
// import d'opérateurs propres à la version 6 de Rxjs
import { take, filter, map, tap, mergeMap, delay } from 'rxjs/operators';

interface Photo {
  albumId?: number;
    id: number;
    title?: string;
    url?: string;
    thumbnailUrl?: string;
    src?: string;
    alt?: string;
}

@Component({
    selector:'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']

})

export class IntroComponent{
  selectedGroup: string = '';
  images: Photo[] = [];
  compteur: number = 0;
  style1: any={
    'color': 'green',
    'text-decoration': 'underline'
  };

  style2 ={
    'color':'green',
    'font-size': '16pt',
  }
    groups: string[] = ['ESD', 'POEI Java', 'POEC Symfony'];

  test(): void{
    this.compteur = this.compteur + 1;
  }

  selectGroup(e: any): void{
    //let selectedValue = e.target.value;//valeur selectionnée , accessible uniquement dans le corps de cette fonction (portée locale)
    //console.log(selectedValue);
    this.selectedGroup = e.target.value;
  }

  private highlighGoodStudents: boolean = false;

  students: Student[] = [
    {id: 1, image:'http://cdn.sports.fr//images/media/football/transferts/articles/liverpool-salah-rouge-de-plaisir/klopp-et-salah/25590839-1-fre-FR/Klopp-et-Salah_w484.jpg',
    prenom: 'Salah', nom: 'Mohammed', notes: [17, 15, 15], group: 'POEI Java'},
    {id: 2, image:'http://cdn.sports.fr//images/media/football/transferts/articles/liverpool-salah-rouge-de-plaisir/klopp-et-salah/25590839-1-fre-FR/Klopp-et-Salah_w484.jpg',
    prenom: 'Fermino', nom: 'Gmail', notes:[9, 5, 10], group: 'POEI Java'},
    {id: 3, image:'http://cdn.sports.fr//images/media/football/transferts/articles/liverpool-salah-rouge-de-plaisir/klopp-et-salah/25590839-1-fre-FR/Klopp-et-Salah_w484.jpg',
    prenom: 'Mané', nom: 'Mikhael', notes: [10, 17, 12], group: 'ESD'}
  ];
  selectedGroup: string = '0';

  highlightStudents(): void{
    this.highlighGoodStudents = this.highlighGoodStudents;
    }
    constructor(private http: HttpClient) {
      // Injection dépendance
      // un objet de type HttpCLient est crée dès l'instanciation
      // de la classe StudentComponent
      // StudentComponent dispose d'une propriété http
      // lui permettant de faire des requêtes ajax
    }
  getAverage (notes: number[]): string{

    let total = 0;
    for (let i=0; i<notes.length; i++){
      total = total + notes[i];
    }
    //.toFixed() renvoie un string.
    return Math.round(total/notes.length).toFixed(2) ;
}
testAjax() {
  this.http
    .get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
    .pipe(
      delay(500), // pause de 0.5 seconde
      mergeMap(data => data),
      //take(3),
      filter(el => el.id > 3999 && el.id < 4021),
      map(el => {
        return {id: el.id, src: el.thumbnailUrl, alt: 'image_' + el.id};
      }),
      tap(() => {
        // cet opérateur n'agit pas sur la valeur du flux (stream)
        //console.log('tap => side effect')
      })
    )
    .subscribe(res => {
      console.log(res);
      // filtrage en utilisant la méthode .filter native
      // des tableaux javascript
      //this.images = res.filter(x => x.id < 21);
      //console.log(this.images);
      this.images.push(res); // on ajoute au tableau les réponses
    });
  }
}
