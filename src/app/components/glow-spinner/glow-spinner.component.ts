import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-glow-spinner',
  templateUrl: './glow-spinner.component.html',
  styleUrls: ['./glow-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlowSpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
