import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  header: any = {
    name: 'Mariem Chaabeni',
    jobtitle: 'Fronend Developer',
  };
  about: any = {
    aboutme: '',
    birthday: 'July 22, 1994',
    location: "Kairouan, Tunisia",
    email:"chaabenimariem@ieee.org",
    phone:"+216 25 442 157"
  };
  skills: any[] = [
    {
      name: 'Angular',
      value: 90,
    },
    {
      name: 'Node JS',
      value: 40,
    },
  ];
  educations: any[] = [
    {
      title: 'Computer Science',
      place: 'ISSAT Sousse,Tunisia',
      duration: '2016 - 2017',
      description:""
    },
  ];
  experience: any[] = [
    {
      title: 'Angular Developer',
      place: 'Sofrecom Tunisia',
      duration: 'September 2019 - Present',
      description:""
    },
  ];
}
