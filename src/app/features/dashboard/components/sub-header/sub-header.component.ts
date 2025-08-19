import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout'

@Component({
    selector: 'app-sub-header',
    templateUrl: './sub-header.component.html',
    styleUrls: ['./sub-header.component.scss'],
    imports: [MatIconModule, FlexLayoutModule]
})
export class SubHeaderComponent {
}
