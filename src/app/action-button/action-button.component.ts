import { Component, HostBinding, Input, input } from '@angular/core';
import { SvgIcon, SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'button[action-button]',
    standalone: true,
    imports: [SvgIconComponent],
    template: `
        <div class="icon">
            <app-svg-icon [icon]="icon()" [size]="type() === 'menu' ? 24 : 30" />
        </div>
        <ng-content></ng-content>
    `,
    styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent {
    icon = input.required<SvgIcon>();
    type = input<'app' | 'menu'>('app');

    @HostBinding('class.selected')  @Input() selected: boolean = false;
    @HostBinding('class') get card(): string[] {
        return ['type-' + this.type()];
    }
}
