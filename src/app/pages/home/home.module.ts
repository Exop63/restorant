import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home.component';
import { NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbSearchModule, NbSpinnerModule, NbTagInputDirective } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  declarations: [ListComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    NbSearchModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    ThemeModule,
    NbListModule,
    NbSpinnerModule,
  ]
})
export class HomeModule { }
