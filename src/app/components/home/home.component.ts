import { Component, OnInit } from '@angular/core';
import { Tr } from 'src/app/models/tr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get_random_int: number = 0;
  tabTr: Tr[] = [];
  cruds = [1,2,3];

  constructor() {
  }

  ngOnInit(): void {
    this.get_random_int = this.getRandomInt(10, 20);
    console.log(this.get_random_int);

    this.tabTr = this.generatingATable(this.get_random_int);
  }

  getRandomInt(min, max): number {
    let min_temp = Math.ceil(min);
    let max_temp = Math.floor(max);
    return Math.floor(Math.random() * (max_temp - min_temp)) + min_temp;
  }

  generatingATable(number_tr: number): Tr[] {
    let table: Tr[] = [];
    let tab_temp: number[] = [];

    for (var i = 0; i <= number_tr; i++) {
      let tr: Tr = {} as Tr;
      let random: number = Math.floor((Math.random() * 1) +0.5);

      tr.id = i;

      if(random == 0){
        tr.class = "selected";
      } else {
        tr.class = "";
      }

      tr.style = "table_row";

      table.push(tr);

      //console.log(tr);
    }

    for (let i = 0; i <= number_tr; i++) {
      if(i != 0 && i != number_tr){
        if (table[i - 1].class == "selected" && table[i].class == "selected" && table[i + 1].class == "selected") {
          let temp_i = i - 1;
          let temp2_i = i + 1;

          if (!tab_temp.includes(temp_i) && !tab_temp.includes(temp2_i) && !tab_temp.includes(i)) {
            tab_temp.push(temp_i);
            tab_temp.push(temp2_i);
            tab_temp.push(i);
            table[i - 1].style = "table_top";
            table[i].style = "table_left_right";
            table[i + 1].style = "table_bottom";  
            i = i + 2;
          }

        }else if(table[i - 1].class == "selected" && table[i].class == "selected"){
          let temp_i = i - 1;

          if (!tab_temp.includes(temp_i) && !tab_temp.includes(i)) {
            tab_temp.push(temp_i);
            tab_temp.push(i);
            table[i - 1].style = "table_top";
            table[i].style = "table_bottom";
          }

        }else if(table[i].class == "selected" && table[i + 1].class == "selected"){
          let temp_i = i + 1;

          if (!tab_temp.includes(temp_i) && !tab_temp.includes(i)) {
            tab_temp.push(temp_i);
            tab_temp.push(i);
            table[i].style = "table_top";
            table[i + 1].style = "table_bottom";
            i = i + 2;
          }

        }
      }else if (i == number_tr) {
        if(table[i - 1].class == "selected" && table[i].class == "selected"){
          let temp_i = i - 1;

          if (!tab_temp.includes(temp_i) && !tab_temp.includes(i)) {
            tab_temp.push(temp_i);
            tab_temp.push(i);
            table[i - 1].style = "table_top";
            table[i].style = "table_bottom";
          }

        }
      }
    }

    console.log(table);

    return table;
  }

}
