import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CardComponent]
        }).compileComponents();
    
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;

        fixture.componentRef.setInput('amount', 'amount!');
        fixture.componentRef.setInput('digits', 'digits!');
        fixture.componentRef.setInput('type', 'visa');
        fixture.detectChanges();
    });

    it('should create and show data', () => {
        expect(component).toBeTruthy();

        expect(fixture.nativeElement.querySelector('.amount').textContent).toEqual('amount!');
        expect(fixture.nativeElement.querySelector('.digits').textContent).toContain('digits!');
    });
});
