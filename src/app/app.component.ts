import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent, CardType } from './card/card.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SvgIcon } from './svg-icon/svg-icon.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MainMenuComponent, TransactionsComponent, CardComponent, ActionButtonComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'charlie-challenge';
    cards: Array<{ type: CardType, amount: string, digits: string }> = [
        {
            type: 'mastercard',
            amount: '$542.25',
            digits: '4587',
        },
        {
            type: 'visa',
            amount: '₴1000',
            digits: '0754',
        },
        {
            type: 'mastercard',
            amount: '€333.3',
            digits: '4444',
        },
    ];
    actions: [string, SvgIcon][] = [['Send', 'send'], ['Receive', 'receive'], ['Utilities', 'utilities'], ['Stats', 'stats']]
    days = [
        {
            title: 'Yesterday',
            transactions:[
                {
                    name: "Netflix",
                    logo: "/assets/images/netflix.svg",
                    amount: "$9.99",
                    isPositive: false,
                    date: new Date("2022-07-03T13:23:00Z"),
                },
                {
                    name: "Starbucks",
                    logo: "/assets/images/starbucks.svg",
                    amount: "$5.42",
                    isPositive: false,
                    date: new Date("2022-07-03T09:13:00"),
                }
            ]
        }, {
            title: 'July 2',
            transactions:[
                {
                    name: "Emily Kaldwin",
                    logo: "/assets/images/mimi.jpg",
                    amount: "$300",
                    isPositive: true,
                    date: new Date("2022-07-02T15:10:00"),
                },
                {
                    name: "Emily Kaldwin",
                    logo: "/assets/images/mimi.jpg",
                    amount: "$5200",
                    isPositive: false,
                    date: new Date("2022-07-02T14:42:00"),
                }
            ]
        }
    ];

    onActionItemClicked(item: string) {
        console.log('Selected', item);
    }
}
