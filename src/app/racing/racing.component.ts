import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-racing',
  imports: [NavbarComponent],
  templateUrl: './racing.component.html',
  styleUrl: './racing.component.css'
})
export class RacingComponent {
  Link2 = "Formula 1"
  Link5 = "WEC"

  @Output() closeRacing = new EventEmitter<void>();
  // Emette evento per chiudere il componente
  onClose(): void {
    this.closeRacing.emit();
  }
  @Output() menuToggle = new EventEmitter<void>();
  // Metodo chiamato quando il bottone del menu viene cliccato
  onMenuClick(): void {
    this.menuToggle.emit();
  }
}
