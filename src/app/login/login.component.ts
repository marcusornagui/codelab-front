import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';

const components = [
  HttpClientModule,
  MatButtonModule, MatCardModule,
  MatInputModule, MatIconModule, MatSlideToggleModule
]

@Component({
  selector: 'cl-login',
  standalone: true,
  imports: [components],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  ocultarSenha = true;
}
