import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';

describe('TransactionsComponent', () => {
    let component: TransactionsComponent;
    let fixture: ComponentFixture<TransactionsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TransactionsComponent],
            providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
        }).compileComponents();
    
        fixture = TestBed.createComponent(TransactionsComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('days', []);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show no data by default', () => {
        expect(fixture.nativeElement.querySelector('h2').textContent)
            .toEqual('No transactions found');
    });

    it('should show data', async () => {
        const days = [
            {
                title: "Day One",
                transactions: [
                    {
                        amount: "amount one",
                        date: new Date(),
                        isPositive: true,
                        logo: 'logo',
                        name: 'transaction one'
                    }
                ]
            }
        ];

        fixture.componentRef.setInput('days',  days);
        fixture.detectChanges();
        expect(component.visibleDays()).toEqual(days);

        expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('Day One');
        expect(fixture.nativeElement.querySelector('img').src).toContain('logo');
        expect(fixture.nativeElement.querySelector('span.transaction').textContent).toEqual('transaction one');
        expect(fixture.nativeElement.querySelector('span.balance').textContent).toEqual('amount one');
    });
});
