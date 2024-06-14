import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, MenuPipe],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.css'
})
export class MainSidebarComponent {
  search: string = "";
  menus = Menus;

  constructor(
    public auth: AuthService
  ){}
}