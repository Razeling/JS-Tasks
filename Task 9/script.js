/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        if (this.budget >= 100000000) {
            return `Was the movie expensive? - true` 
        }
        else return `Was the movie expensive? - false` 
    }
}

const movie1 = new Movie (
    'Shrek 5',
    'Rob Schneider',
    '500000'
)

const movie2 = new Movie (
    'Cats 2',
    'Steven Spielberg',
    '150000000'
)

console.log(movie1);
console.log(movie1.wasExpensive());

console.log(movie2);
console.log(movie2.wasExpensive());