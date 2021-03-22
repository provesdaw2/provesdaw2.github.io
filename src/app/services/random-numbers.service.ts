import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomNumbersService {

  private _maxNData: number = 1000;
  private _curNData: number = 0;
  private _randNumbers: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  constructor() { }

  get maxNData(): number {
    return this._maxNData;
  }

  get randNumbers(): Observable<number[]> {
    return this._randNumbers.asObservable();
  }

  getNewRandNumbers() {
    let newNumbers: number[] = [];
    for(let i=0; i<20; i++) {
      if(this._curNData < this._maxNData) {
        newNumbers.push(Math.random() % 10000);
        this._curNData++;
      } else {
        i = 20;
      }
    }

    console.log(newNumbers);

    this.randNumbers.pipe(take(1)).subscribe(
      (originalRandNumbers: number[]) => {
        originalRandNumbers = originalRandNumbers.concat(newNumbers);
        console.log(originalRandNumbers);
        this._randNumbers.next(originalRandNumbers);
      }
    );
  }
}
