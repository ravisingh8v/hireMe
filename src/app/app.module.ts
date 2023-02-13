import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ProfileDropdownComponent } from './core/profile-dropdown/profile-dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { OverlayService } from './core/service/overlay.service';
import { CommunicationService } from './core/service/communication.service';
import { ApiService } from './core/service/api.service';
@NgModule({
  declarations: [AppComponent, ProfileDropdownComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [ApiService, CommunicationService, OverlayService],
  bootstrap: [AppComponent],
})
export class AppModule {}
