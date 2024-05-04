import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have all the elements`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const compiled = fixture.nativeElement as HTMLElement;
        
        expect(compiled.querySelector('.cards')).toBeTruthy();
        expect(compiled.querySelector('.buttons')).toBeTruthy();
        expect(compiled.querySelector('app-transactions')).toBeTruthy();
        expect(compiled.querySelector('app-main-menu')).toBeTruthy();
    });
});
