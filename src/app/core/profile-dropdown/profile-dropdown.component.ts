import { Component } from '@angular/core';
import { OverlayService } from '../service/overlay.service';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss'],
})
export class ProfileDropdownComponent {
  // public close: boolean;
  constructor(private overlay: OverlayService) {}
  closeDropdown() {
    this.overlay.overlayRef.detach();
  }
}
