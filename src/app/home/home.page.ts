import { Component } from '@angular/core';
import { RandomNumbersService } from '../services/random-numbers.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public randNumbers: number[];

  constructor(private randNumService: RandomNumbersService) {
    this.randNumService.getNewRandNumbers();
    this.randNumService.randNumbers.subscribe(
      (origianlRandNumbers: number[]) => {
        this.randNumbers = origianlRandNumbers;
      }
    );
  }

  loadNewData(event) {
    //Demanar al service noves dades (per exemple, el service ens les anirà passant de 20 en 20)
    this.randNumService.getNewRandNumbers();

    //Aturar l'event d'Scroll
    event.target.complete();
    if(this.randNumbers.length == this.randNumService.maxNData) {
      event.target.disabled = true;
    }
  }

}
