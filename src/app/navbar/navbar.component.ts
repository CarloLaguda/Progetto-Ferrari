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
  
  @Output() menuToggle = new EventEmitter<void>();
  // Metodo chiamato quando il bottone del menu viene cliccato
  onMenuClick(): void {
    this.menuToggle.emit();
  }
}
