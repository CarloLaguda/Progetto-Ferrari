import { Component, EventEmitter, Output } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
CommonModule
@Component({
  selector: 'app-navbar',
  imports: [CommonModule,MenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  Link1 = "Racing"
  Link2 = "Cars"
  Link3 = "Storia"
  Link4 = "Musei"
  Link5 = "Collezione"
  Link6 = "Info"

  // Variabile per controllare la visibilità del menu
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
