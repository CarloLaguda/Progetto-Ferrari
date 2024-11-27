import { Component, EventEmitter, Output, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
CommonModule
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  Link1 = "Racing"
  Link2 = "Cars"
  Link3 = "Storia"
  Link4 = "Musei"
  Link5 = "Collezioni"
  Link6 = "Info"
  @Output() menuToggle = new EventEmitter<void>();
  // Metodo chiamato quando il bottone del menu viene cliccato
  onMenuClick(): void {
    this.menuToggle.emit();
  }
  @Output() racingClicked = new EventEmitter<void>(); // Evento emesso al clic
  // Metodo chiamato quando l'utente clicca sul <h3>
  onRacingClick(): void {
    this.racingClicked.emit(); // Notifica il padre (AppComponent)
  }
}
