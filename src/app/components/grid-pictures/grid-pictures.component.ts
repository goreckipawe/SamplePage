import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-grid-pictures',
  templateUrl: './grid-pictures.component.html',
  styleUrls: ['./grid-pictures.component.scss']
})
export class GridPicturesComponent implements OnInit {

  pictures_array: Image[] = [
    {image: `assets/images/Turniej-Warhammer-40K.jpg`, x: 0, y: 0, width: 0},
    {image: `assets/images/static-assets-upload1861949917717063613.png`, x: 0, y: 0, width: 0},
    {image: `assets/images/Emperor-of-Mankind.jpg`, x: 0, y: 0, width: 0},
    {image: `assets/images/0683d500aa6bbcb2695849e36bc5ef7b.jpg`, x: 0, y: 0, width: 0},
    {image: `assets/images/Emperor_Sanguinius_Echoes_of_Imperium-1024x553.jpg`, x: 0, y: 0, width: 0},
    {image: `assets/images/498f8874828a2f2c-1200x675.jpg`, x: 0, y: 0, width: 0},
    {image: `assets/images/6VJFVYTKh43Dt7ToMDv5RF.jpg`, x: 0, y: 0, width: 0},
    {image: `assets/images/62e305bd60475bb45a79b20851ec0971.jpg`, x: 0, y: 0, width: 0},
    {image: `assets/images/62e305bd60475bb45a79b20851ec0971.jpg`, x: 0, y: 0, width: 0},
    {image: `assets/images/62e305bd60475bb45a79b20851ec0971.jpg`, x: 0, y: 0, width: 0}
  ];

  constructor() { }

  ngOnInit(): void {
    this.test(50, 100, 250, 250);
  }

  //jest to metoda do wyliczania położenia obrazków
  //muszę przyznać że nie wiem czy dobrze zrozumiałem to zadanie 
  //więc zrobiłem je tak by obrazki ustawiały się w kwadrat który zaczyna się od wskazanej pozycji
  //start_x i start_y to punkt początkowy pierwszego obrazka
  //shift_x i shift_y przesunięcie następnego obrazka względem poprzedniego 
  test(start_x: number, start_y: number, shift_x: number, shift_y: number){
    const length = this.pictures_array.length;
    const sqrt = Math.floor(Math.sqrt(length)) + 1; //wyznaczam kwadrat liczby elemętów w zbiorze
    const rest_of_the_division = length % sqrt; //dzielę dłógość zboru przez wyznaczony wcześniej kwadrat by uzyskać resztę z dzielenia
    const end = sqrt - rest_of_the_division; //liczę ile zostanie elemętów w ostatnim wierszu 
    const end_width_spacing = end === 1 ? shift_x : (end - 1) * (shift_x + 50);//wyliczam długość ostatniego elemętu przez doliczenie wszystkich przesunięć jakie powinien zajmować  jeśli w ostatnim wierszu jest więcej niż jeden element
    const end_width = (end * 200) + end_width_spacing; //dodaję do długości przesunięć dłógość wszystkich elemętów
    let r = 1;
    let x = start_x; //ustawiam pozycję startową obrazka
    let y = start_y;

    for (let index = 0; index < length; index++) {//wyznaczam pozycję pozostałych obrazków
      if (r == sqrt) {
        r = 1;
        this.pictures_array[index].x = x;
        this.pictures_array[index].y = y;
        x += shift_x;
        y += shift_y;
        x = start_x;
      } else {
        this.pictures_array[index].x = x;
        this.pictures_array[index].y = y;
        x += shift_x;
        r += 1;
      }
    }

    if (rest_of_the_division !== 0) {//ustawiam dłógość ostatniego obrazka w zależności od liczby obrazków w ostatnim rzędzie
      this.pictures_array[length - 1].width = end_width;
    } else {
      this.pictures_array[length - 1].width = 200;
    }

    return this.pictures_array;
  }
}
