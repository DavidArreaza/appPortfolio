import { Component,  OnInit } from '@angular/core';
import listProjects from 'src/assets/json/projects.json';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'appPortfolio';
  isLinear = false;
  nombre = 'David Arreaza Gil';
  aboutMe = '';
  Projects : any = listProjects;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  constructor() {}

  ngOnInit() {

  }
}
