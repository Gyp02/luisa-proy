import { Component } from '@angular/core';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  faCircleDown = faCircleDown;
}
