import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { TextfieldComponent } from '../components/textfield/textfield.component';
import { SelectComponent } from '../components/select/select.component';
import { Option } from '../models/Option';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent,
    TextfieldComponent,
    SelectComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
}
