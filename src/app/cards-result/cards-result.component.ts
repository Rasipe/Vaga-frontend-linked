import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../services/api.service';
import { Card } from '../models/card.model';
import { Router } from '@angular/router';
import { LoaderComponent } from '../components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-cards-result',
  standalone: true,
  imports: [LoaderComponent, CommonModule, CardListComponent],
  providers: [HttpService, Router],
  templateUrl: './cards-result.component.html',
  styleUrl: './cards-result.component.scss'
})
export class CardsResultComponent implements OnInit{
  
  cards: Card[] = [];
  loading: boolean = false;
  constructor (private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    const limit = 30
    const code = new URLSearchParams(location.search).get('code') || ""
    if (!code) {
      this.router.navigate([""], { 
        queryParams: []
      })
    }

    try {
      this.httpService.getCards(code, limit)
        .pipe(catchError(err => {
          this.router.navigate([""], { 
            queryParams: []
          })
           console.log(err);
          return of([])
        }))
        .subscribe((cards) => {
          if (cards.length == limit) {
            this.loading = false;
            this.cards = cards
          }
      });
      
    } catch (error) {
      console.log(error);
    }
  }
}
