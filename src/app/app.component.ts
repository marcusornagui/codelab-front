import {  Component} from '@angular/core';

import { LoginComponent } from './login/login.component';


@Component ({
  selector: 'cl-root',
  standalone: true,
  imports: [  LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent  {

}
