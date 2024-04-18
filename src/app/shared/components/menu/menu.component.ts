import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

interface IMenuItem {
  label: string;
  icon: string;
}

@Component({
  selector: 'cl-menu',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {
  menuItems: IMenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
    },
  ];
}
