import { Component,  OnInit } from '@angular/core';
import listProjects from 'src/assets/json/projects.json';
import { faArrowRight, faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Portfolio';
  isLinear = false;

  nombre = 'DAVID ARREAZA GIL';
  puesto = 'Desarrollador Front-end junior y Técnico en Desarrolo de Aplicaciones Multiplataforma';
  description = '¡Hola! Mi nombre es David. Empecé en el mundo de la programación porque siempre me pregunté que había detrás de un botón. Estudié el CFGS de Desarrollo de Aplicaciones Multiplaforma en el que aprendí Java, C#, Android, HTML, SQL entre otras muchas cosas más. Tambíen, realicé un curson de Desarrollo Front-end con Angular impartido por la Escuela de Organización Industrial (EOI). Trabajar en este sector hace que mi interés por la programación aumente con cada nuevo conocimiento que adquiero. Deseo participar en nuevos proyectos y enfrentarme a nuevos desafios, por lo que si buscas a alguien para ello, no dudes en contactar conmigo.';

  Projects : any = listProjects;

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  icons = [
    {icon : faEnvelope, name : "E-mail", email: 'darreazagil@gmail.com'},
    {icon : faLinkedinIn, name : "LinkedinIn", url : 'www.linkedin.com/in/davidarreazagil'},
    {icon : faGithub, name : 'GitHub', url : 'https://github.com/DavidArreaza'},
    {icon : faFileCode, name : 'Currículum', url : 'https://drive.google.com/file/d/1niH-xzjDBW1IBYdqdbCDrY7KTzV3r2zS/view?usp=sharing'}];

  constructor() {}

  ngOnInit() {

  }
}
