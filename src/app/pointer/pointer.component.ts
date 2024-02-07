import { Component } from '@angular/core';
import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-pointer',
  templateUrl: './pointer.component.html',
  styleUrls: ['./pointer.component.css'],  // Fix the property name to styleUrls
  animations: [
    trigger('rotate', [
      state('up', style({ transform: 'rotate(0deg)' })),
      state('down', style({ transform: 'rotate(180deg)' })),
      transition('up <=> down', animate('200ms ease-out')),
    ]),
  ],
})

export class PointerComponent {

  dropdownState = 'up';

  toggleDropdown() {
    this.dropdownState = this.dropdownState === 'up' ? 'down' : 'up';
  }

}
