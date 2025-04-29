import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, FormsModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  searchQuery: string = '';
  onSearch() {
    console.log('Search Query:', this.searchQuery);
  }
}
