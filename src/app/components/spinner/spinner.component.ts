import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  template: `
    <div class="spinner">
    </div>
  `,
  styles: `
    @import 'variables.scss';

    .spinner {
      height: 5.375rem;
      width: 5.375rem;
      border-radius: 50%;
      border: .675rem solid $light-green;
      border-top: .675rem solid $white;
      animation: rotate 1s linear infinite;
    }

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
  `,
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
})
export class SpinnerComponent {

}
