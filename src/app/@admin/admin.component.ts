import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./core/sidebar/sidebar.component";
import { HeaderComponent } from "./core/header/header.component";
import { TitleComponent } from "./core/title/title.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarComponent, HeaderComponent, TitleComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  toggledValue = true;

  toggled($event:boolean){
    console.log('admin', $event);
    this.toggledValue = $event;
  }

}
