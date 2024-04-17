import {  Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';


@Component ({
  selector: 'cl-root',
  standalone: true,
  imports: [ HttpClientModule,
    MatButtonModule, MatCardModule,
    MatInputModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent  {
  ocultarSenha = true;
}
