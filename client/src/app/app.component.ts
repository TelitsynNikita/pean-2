import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isModal = false

  showModal() {
    this.isModal = true
  }

  checkModal(modal: any) {
    this.isModal = modal
  }
}
