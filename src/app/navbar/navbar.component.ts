import { Component, EventEmitter, Output } from '@angular/core';
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
  refreshAndScrollToTop(): void {
    // Porta la posizione di scroll in cima
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Ricarica la pagina dopo un breve ritardo
    setTimeout(() => {
      window.location.reload();
    },600); // Attendi mezzo secondo per permettere lo scroll
  }
}
