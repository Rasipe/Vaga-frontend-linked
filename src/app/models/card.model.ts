export interface Card {
    id: string;
    name: string;
    text: string;
    types: string[];
    imageUrl?: string;
    manaCost?: string;
}