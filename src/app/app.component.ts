import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet, NavbarComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ferrari';
  isMenuVisible: boolean = false;

  // Metodo per alternare la visibilità del menu
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
  // Metodo per nascondere il menu quando viene emesso l'evento closeMenu
  hideMenu(): void {
    this.isMenuVisible = false;
  }
}
