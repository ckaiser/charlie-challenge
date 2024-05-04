import { Component, Input, OnInit } from '@angular/core';

export type SvgIcon = 'send' | 'receive' | 'search' | 'utilities' | 'stats' | 'home' | 'exchange' | 'map' | 'settings';

@Component({
    selector: 'app-svg-icon',
    standalone: true,
    template: `
    <svg attr.width="{{width}}px" attr.height="{{height}}px" [attr.fill]="fill" [attr.class]="class">
      <use attr.xlink:href="/assets/icons/{{icon}}.svg#{{icon}}"></use>
    </svg>`,
})
export class SvgIconComponent implements OnInit {
  @Input() icon!: SvgIcon;
  @Input() width?: number;
  @Input() height?: number;
  @Input() size?: number = 24;
  @Input() fill?: string;
  @Input() class?: string;

  ngOnInit(): void {
      if (!this.width || !this.height) {
          this.width = this.size;
          this.height = this.size;
      }
  }
}
