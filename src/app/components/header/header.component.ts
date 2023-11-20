import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHurricane } from '@fortawesome/free-solid-svg-icons';

@Component({
  template: `
    <header>
      <fa-icon
        [icon]=faHurricane
      />
      <span>Observable - Design Pattern</span>
    </header>
  `,
  styles: `
  @import 'mixins.scss';
  @import 'variables.scss';

  header {
    @include flexible(
      $align: center,
      $justify: center
    );
    min-height: 10vh;
    gap: .575rem;
    font-size: 1.875rem;
    font-weight: 700;
    padding: .875rem 2.375rem;
    background-color: $black;
    color: $white;
  }
  `,
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
})
export class HeaderComponent {
  faHurricane = faHurricane;
}
