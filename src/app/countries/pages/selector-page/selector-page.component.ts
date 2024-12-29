import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-selector-page',
  standalone: true,
  imports: [],
  template: `<p>selector-page works!</p>`,
  styleUrl: './selector-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorPageComponent { }
