import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonComponent } from './action-button.component';

describe('ActionButtonComponent', () => {
    let component: ActionButtonComponent;
    let fixture: ComponentFixture<ActionButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ActionButtonComponent],
        }).compileComponents();
    
        fixture = TestBed.createComponent(ActionButtonComponent);
        component = fixture.componentInstance;
        
        fixture.componentRef.setInput('icon', 'send');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.icon')).toBeTruthy();
    });
});
