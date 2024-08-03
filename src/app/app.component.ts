import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './units/navbar/navbar.component';
import { AccordianComponent } from './units/accordian/accordian.component';
import { CarousalComponent } from './units/carousal/carousal.component';
import { CardComponent } from './units/card/card.component';
import { DepartmentComponent } from './pages/department/department.component';
import { FooterComponent } from './units/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,AccordianComponent,CarousalComponent,CardComponent,DepartmentComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angproj';
}
