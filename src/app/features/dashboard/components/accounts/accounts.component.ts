import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe, DecimalPipe, CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss'],
    imports: [FlexLayoutModule, MatButtonModule, MatIconModule, CommonModule],
    providers: [DatePipe, DecimalPipe]
})
export class AccountsComponent {
    accounts = [
        {
            name: 'Virtual Wallet (CAD)',
            number: '2024************',
            balance: 9999997.00,
            currency: 'CAD',
            updatedAt: new Date(),
            icon: 'account_balance_wallet',
            tootltip: true,
            refresh: true
        },
        {
            name: 'Virtual Wallet (USD)',
            number: '2024************',
            balance: 0.00,
            currency: 'USD',
            updatedAt: new Date(),
            icon: 'account_balance_wallet',
            tootltip: true,
            refresh: true
        },
        {
            name: 'ACH Debit Account',
            number: '1417********',
            balance: 367268729.76,
            currency: 'USD',
            updatedAt: new Date(),
            icon: 'account_balance'
        },
        {
            name: 'inactive account',
            number: '1111********',
            balance: -13034.56,
            currency: 'USD',
            updatedAt: new Date(),
            icon: 'account_balance'
        },
        {
            name: 'Bank - 1111',
            number: '1111********',
            balance: null,
            currency: '',
            updatedAt: null,
            icon: 'block'
        }
    ];
}
