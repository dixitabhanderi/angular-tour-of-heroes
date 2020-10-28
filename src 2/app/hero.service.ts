import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import  { MessageService} from './message.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  // private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]>{
    // return this.http.get<Hero[]>(this.heroesUrl)
      return of(HEROES);
  }
  heroesUrl<T>(heroesUrl: any): Observable<Hero[]> {
    throw new Error("Method not implemented.");
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private Log(message: string) {
    this.messageService.add('HeroService: ${message}');
  }
}
