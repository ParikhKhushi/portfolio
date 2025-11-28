import { Component } from '@angular/core';
import {links} from '../../../links/links';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {
  isMobile: any;

  redirectToLinkdin = (): void => {
    window.open(links.linkedinLink, '-blank');
  };

  redirectToGithub = () => {
    window.open(links.githubLink, '-blank');
  };


  redirectToProject = () => {
    window.location.href = '#projects';
  };

  redirectToAbout = () => {
    window.location.href = '#about';
  };
}
