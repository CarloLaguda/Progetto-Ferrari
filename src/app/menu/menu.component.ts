import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  // EventEmitter per notificare la chiusura del menu
  @Output() closeMenu = new EventEmitter<void>();

  // Metodo per chiudere il menu
  close() {
    this.closeMenu.emit();
  }
}
