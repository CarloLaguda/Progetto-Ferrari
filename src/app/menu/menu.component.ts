import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  // Evento per emettere quando il menu deve essere chiuso
  @Output() closeMenu = new EventEmitter<void>();

  // Metodo chiamato quando il bottone "×" viene cliccato
  onClose(): void {
    this.closeMenu.emit();
  }
}
