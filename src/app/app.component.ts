import {  Component} from '@angular/core';

import { LayoutComponent } from './shared/components/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';


@Component ({
  selector: 'cl-root',
  standalone: true,
  imports: [  LayoutComponent, HomeComponent, FooterComponent,
     HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent  {

}
