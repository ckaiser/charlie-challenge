import { Component, computed, input, signal } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { DatePipe } from '@angular/common';

type Transaction = {
  name: string;
  logo: string;
  amount: string;
  isPositive: boolean;
  date: Date;
}

type TransactionDay = {
  title: string;
  transactions: Array<Transaction>
}

@Component({
    selector: 'app-transactions',
    standalone: true,
    imports: [SvgIconComponent, DatePipe],
    templateUrl: './transactions.component.html',
    styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
    days = input.required<Array<TransactionDay>>();
    searching = signal<boolean>(false);
    searchTerm = signal<string>('');
    visibleDays = computed(() => {
        const query = this.searchTerm();
        
        if (!this.searching() || !query) {
            return this.days();
        }

        // Do a deep copy to avoid transforming the original data, not ideal.
        const daysCopy: Array<TransactionDay> = JSON.parse(JSON.stringify(this.days()));
        return daysCopy.filter(day => {
            day.transactions = day.transactions.filter(transaction => {
                return transaction.name.toLocaleLowerCase().includes(query)
            })

            return day.transactions.length != 0;
        });
    });

    onSearchChanged(term: string) {
        this.searchTerm.set(term.trim().toLocaleLowerCase());
    }

    onSearchButtonClicked() {
        this.searching.set(!this.searching());
        this.searchTerm.set('');
    }
}
