import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SubHeaderComponent } from '../components/sub-header/sub-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe, DecimalPipe, CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccountsComponent } from '../components/accounts/accounts.component';
import { FilterComponent } from '../components/filter/filter.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [HeaderComponent, FilterComponent, AccountsComponent, FlexLayoutModule, FooterComponent, SubHeaderComponent, MatButtonModule, MatIconModule, CommonModule],
  providers: [DatePipe, DecimalPipe]
})
export class DashboardPage {
  orders = [
    { orderNumber: '1053821', processingDate: new Date('2024-11-08'), status: 'In-progress', amount: 1.5 },
    { orderNumber: '1053820', processingDate: new Date('2024-11-08'), status: 'In-progress', amount: 1.5 },
    { orderNumber: '1053641', processingDate: new Date('2024-10-07'), status: 'In-progress', amount: 20.5 },
    { orderNumber: '1053528', processingDate: new Date('2024-09-04'), status: 'In-progress', amount: 1.5 },
    { orderNumber: '1053527', processingDate: new Date('2024-09-03'), status: 'In-progress', amount: 1.5 },
    { orderNumber: '1053183', processingDate: new Date('2024-06-20'), status: 'In-progress', amount: 1.5 },
  ];
}
