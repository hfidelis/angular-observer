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
      <span>Observables</span>
    </header>
  `,
  styles: `
  @import 'mixins.scss';
  @import 'variables.scss';

  header {
    @include flexible(
      $align: center,
      $justify: start
    );

    gap: .375rem;
    font-size: 1.375rem;
    font-weight: 700;
    padding: .875rem 1.375rem;
    background-color: $dark-green;
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
