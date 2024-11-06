import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SiderbarComponent } from "./siderbar/siderbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SiderbarComponent,SiderbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exam';
}