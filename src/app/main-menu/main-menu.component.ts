import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { SvgIcon } from '../svg-icon/svg-icon.component';

@Component({
    selector: 'app-main-menu',
    standalone: true,
    imports: [ActionButtonComponent],
    template: `
    @for (item of menu; track item) {
        <button action-button (click)="onMenuItemClicked(item[0])" [selected]="selected === item[0]" type="menu" [icon]="item[1]">{{item[0]}}</button>
    }`,
    styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
    selected: string = 'Home';
    menu: [string, SvgIcon][] = [
        ['Home', 'home'],
        ['Exchange', 'exchange'],
        ['Map', 'map'],
        ['Settings', 'settings'],
    ];

    onMenuItemClicked(item: string) {
        console.log('Selected', item);
        this.selected = item;
    }
}
