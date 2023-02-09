import { Component } from '@angular/core';
import { ProfileDropdownComponent } from '../profile-dropdown/profile-dropdown.component';
import { OverlayService } from '../service/overlay.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private dropdown: OverlayService) {}
  openDropdown() {
    this.dropdown.openDialogue(ProfileDropdownComponent);
  }
}
