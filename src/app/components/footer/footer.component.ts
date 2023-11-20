import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPeopleGroup, faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  template: `
    <footer>
      <div
        class="footer__container"
      >
        <div
          class="footer__title"
        >
          <fa-icon
            [icon]="faPeopleGroup"
          />
          <span>Equipe</span>
        </div>
        <div
          class="footer__team"
        >
          <span> <fa-icon [icon]="faCircleUser" />  Heitor Fidelis</span>
          <span> <fa-icon [icon]="faCircleUser" /> Matheus Vinícius</span>
          <span> <fa-icon [icon]="faCircleUser" /> Tulio Baruk</span>
          <span> <fa-icon [icon]="faCircleUser" /> Thyago Silva</span>
        </div>
      </div>
    </footer>
  `,
  styles: `
  @import 'mixins.scss';
  @import 'variables.scss';

  footer {
    @include flexible();
    padding: 1.375rem 0;
    background-color: $black;
    min-height: 12vh;

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

      > .footer__team {
        @include flexible();
        gap: 1.125rem;

        > span {
          font-weight: 600;
          font-style: italic;
        }
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
  faCircleUser = faCircleUser;
}
