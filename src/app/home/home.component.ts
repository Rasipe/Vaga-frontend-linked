import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { TextfieldComponent } from '../components/textfield/textfield.component';
import { SelectComponent } from '../components/select/select.component';
import { Option } from '../models/option.model';
import { HttpService } from '../services/api.service';
import { SetListComponent } from './set-list/set-list.component';
import { CardSet } from '../models/collection.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent,
    TextfieldComponent,
    SelectComponent,
    SetListComponent,
    CommonModule
  ],
  providers: [
    HttpService
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor (private httpService: HttpService, private router: Router) {}

  search: string = "";
  collection: string = "";
  sets: CardSet[] = [];
  loading = false;
  options: Option[] = [
    {
      label: 'Amonkhet',
      value: 'amonkhet'
    },
    {
      label: 'Ixalan',
      value: 'ixalan'
    },
    {
      label: 'Zendikar',
      value: 'zendikar'
    },
    {
      label: 'Ravnica',
      value: 'ravnica'
    },
    {
      label: 'Onslaught',
      value: 'onslaught'
    }
  ]

  onSubmit(event: any) {
    event.preventDefault();
    this.httpService.getSets(this.search, this.collection).subscribe(collection => {
      this.sets = collection;
    })
  }

  setSelectHander(code: string) {
    this.router.navigate([`result`], {
      queryParams: {code}
    });
  }
}
