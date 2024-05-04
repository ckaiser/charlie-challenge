import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {
    let component: MainMenuComponent;
    let fixture: ComponentFixture<MainMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MainMenuComponent]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(MainMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show all buttons', () => {
        let i = 0;
        for (const [text] of component.menu) {
            expect(fixture.nativeElement.querySelectorAll('button')[i].textContent).toEqual(text);
            i++;
        }
    });
});
