import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowDateComponent } from "../show-date/show-date.component";
import { ManageInterestListComponent } from "../manage-interest-list/manage-interest-list.component";
import { EditInterestDataComponent } from '../edit-interest-data/edit-interest-data.component';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MyPipePipe } from '../my-pipe.pipe';
import { PlDatePipe } from '../pl-date.pipe';
import { FilterDataPipe } from '../filter-data.pipe';
import { InterestService } from '../interest.service';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [
    FilterDataPipe, PlDatePipe, MyPipePipe, CommonModule, FormsModule,
    ShowDateComponent, ManageInterestListComponent, EditInterestDataComponent
  ],
  templateUrl: './business.component.html',
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  // Properties for the data previously defined in HTML
  titlecaseText: string = 'Capital letters in a sentence';
  currencyAmount: number = 1.23;
  dateNumber: number = 1.23456789;
  dateOfBirth: Date = new Date('2000-03-18');
  currencyCode: string = 'PLN';
  currencySymbol: string = 'zł';

  name: string = 'Joanna';
  surname: string = 'Krupa';
  interests: string[];
  selected: number = -1;

  messageMapping: { [k: string]: string } = {
    '=0': 'No messages.',
    '=1': 'One message.',
    'other': '# messages.',
  };

  constructor(private interestService: InterestService) {
    this.interests = interestService.Interests;
  }

  select(which: number): void {
    this.selected = which;
  }

  saveChangedInterest(newInterest: string): void {
    this.interests[this.selected] = newInterest;
    this.selected = -1;
  }
}
