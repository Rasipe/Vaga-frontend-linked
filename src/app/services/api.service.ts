import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, expand, map, of, switchMap, take } from "rxjs";
import { CardSet } from "../models/collection.model";
import { Card } from "../models/card.model";

interface CardSetResponse {
    sets: CardSet[]
}

interface CardBoosterResponse {
    cards: Card[]
}

@Injectable()
export class HttpService {

    private _baseUrl = "https://api.magicthegathering.io/v1";

    constructor(private http: HttpClient) { }

    private _cardCollectionSet: BehaviorSubject<CardSet[]> = new BehaviorSubject<CardSet[]>([]);
     _cards: BehaviorSubject<Card[]> = new BehaviorSubject<Card[]>([]);

    get cardSets() {
        return this._cardCollectionSet.asObservable();
    }

    get cards() {
        return this._cards.asObservable();
    }

    getSets(name: string, block: string): Observable<any> {
        const params = { name, block }
        this.http.get<CardSetResponse>(`${this._baseUrl}/sets`, { params }).subscribe((res: CardSetResponse) => {
            this._cardCollectionSet.next(res.sets)
        })
        return this.cardSets;
    }

    getCards(id: string, limit: number = 30) {
        const url = `${this._baseUrl}/sets/${id}/booster`
        const cards: any[] = []
        const req = this.http.get<CardBoosterResponse>(url).pipe(
            expand(data => {
                const creatureCards = data.cards?.filter(card => card.types.find(type => type == "Creature")) || [];
                cards.push(...creatureCards)
                if (cards.length > limit) {
                    cards.length = limit
                }
                if (cards.length == limit) {
                    this._cards.next(cards);
                }
                return cards.length < limit ? this.http.get<CardBoosterResponse>(url) : of({cards: []})
            }),
            take(limit),
            switchMap((res) => {
                return of(cards)
            }),
            catchError(() => {
                const msg = "Erro ao tentar buscar o booster, tente outra coleção"
                alert(msg)
                throw new Error(msg)
            })
        );
        return req;
    }
}