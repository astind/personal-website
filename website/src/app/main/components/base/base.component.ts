import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  faGitHub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
