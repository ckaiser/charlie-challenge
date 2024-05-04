import { Component, HostBinding, input } from '@angular/core';

export type CardType = 'mastercard' | 'visa';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [],
    template: `
        <div class="amount">{{ amount() }}</div>
        <div class="digits">•••• {{ digits() }}</div>
    `,
    styleUrl: './card.component.scss',
})
export class CardComponent {
    digits = input.required<string>();
    amount = input.required<string>();
    type = input.required<CardType>();

    @HostBinding('class') get card(): [string, string] {
        return ['card', this.type()];
    }
}
