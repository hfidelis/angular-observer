import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  template: `
    <footer>
      <div class="footer__container">
        <div class="footer__title">
          <fa-icon [icon]="faPeopleGroup" />
          <span>Equipe</span>
        </div>
        <span>Heitor Fidelis</span>
        <span>Matheus Vinícius</span>
        <span>Tulio Baruk</span>
        <span>Thyago Silva</span>
      </div>
    </footer>
  `,
  styles: `
  @import 'mixins.scss';
  @import 'variables.scss';

  footer {
    @include flexible();
    padding: 1.375rem 0;
    background-color: $dark-green;

    > .footer__container {
      @include flexible($direction: column,);
      gap: .4rem;
      color: $white;

      > .footer__title {
        @include flexible();
        gap: .275rem;
        font-size: 1.375rem;
        font-weight: 700;
      }

      > span {
        font-weight: 600;
        font-style: italic;
      }
    }
  }
  `,
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
})
export class FooterComponent {
  faPeopleGroup = faPeopleGroup;
}
