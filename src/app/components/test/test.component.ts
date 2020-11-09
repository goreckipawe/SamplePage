import { Component, OnInit } from '@angular/core';
import { Tr } from 'src/app/models/tr';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  get_random_int: number = 0;
  tab_tr: Tr[] = [];
  displayed_columns: string[] = ['id', 'class', 'style'];

  constructor() {
  }

  ngOnInit(): void {
    this.get_random_int = this.getRandomInt(10, 20);
    console.log(this.get_random_int);

    this.tab_tr = this.generatingATable(this.get_random_int);
  }

  getRandomInt(min, max): number {
    const min_temp = Math.ceil(min);
    const max_temp = Math.floor(max);
    return Math.floor(Math.random() * (max_temp - min_temp)) + min_temp;
  }

  generatingATable(number_tr: number): Tr[] {
    const table: Tr[] = [];
    const tab_temp: number[] = [];

    for (let i = 0; i <= number_tr; i++) {
      const tr: Tr = {} as Tr;
      const random: number = Math.floor((Math.random() * 1) + 0.5);

      tr.id = i;

      if(random === 0){
        tr.class = "selected";
      } else {
        tr.class = "";
      }

      tr.style = "table_row";

      table.push(tr);

      //console.log(tr);
    }

    for (let i = 0; i <= number_tr; i++) {
      if(i !== 0 && i !== number_tr){
        if (table[i - 1].class === "selected" && table[i].class === "selected" && table[i + 1].class === "selected") {
          const temp_i = i - 1;
          const temp2_i = i + 1;

          if (!tab_temp.includes(temp_i) && !tab_temp.includes(temp2_i) && !tab_temp.includes(i)) {
            tab_temp.push(temp_i);
            tab_temp.push(temp2_i);
            tab_temp.push(i);
            table[i - 1].style = "table_top";
            table[i].style = "table_left_right";
            table[i + 1].style = "table_bottom";  
            i = i + 2;
          }

        }else if (table[i - 1].class === "" && table[i].class === "selected" && table[i + 1].class === "") {
          if (!tab_temp.includes(i)) {
            tab_temp.push(i);
            table[i].style = "table_row_selected";
          }

        }else if (table[i - 1].style === "table_bottom" && table[i].class === "selected") {
          if (!tab_temp.includes(i)) {
            tab_temp.push(i);
            table[i - 1].style = "table_left_right";
            table[i].style = "table_bottom";
          }

        }else if(table[i - 1].class === "selected" && table[i].class === "selected"){
          const temp_i = i - 1;

          if (!tab_temp.includes(temp_i) && !tab_temp.includes(i)) {
            tab_temp.push(temp_i);
            tab_temp.push(i);
            table[i - 1].style = "table_top";
            table[i].style = "table_bottom";
          }

        }else if(table[i].class === "selected" && table[i + 1].class === "selected"){
          const temp_i = i + 1;

          if (!tab_temp.includes(temp_i) && !tab_temp.includes(i)) {
            tab_temp.push(temp_i);
            tab_temp.push(i);
            table[i].style = "table_top";
            table[i + 1].style = "table_bottom";
            i = i + 2;
          }

        }
      }else if (i === number_tr) {
        if(table[i - 1].class === "selected" && table[i].class === "selected"){
          const temp_i = i - 1;

          if (!tab_temp.includes(temp_i) && !tab_temp.includes(i)) {
            tab_temp.push(temp_i);
            tab_temp.push(i);
            table[i - 1].style = "table_top";
            table[i].style = "table_bottom";
          }

        }
      }else if(table[i].class == "selected"){
        table[i].style = "table_row_selected";
      }
    }

    for (let i = 0; i <= number_tr; i++) {
      if(i !== 0){
        if(table[i - 1].style === "table_bottom" && table[i].style === "table_top"){

          table[i - 1].style = "table_left_right";
          table[i].style = "table_left_right";

        }else if(table[i - 1].style === "table_bottom" && (table[i].style === "table_row_selected" || table[i].class === "selected")){

          table[i - 1].style = "table_left_right";
          table[i].style = "table_bottom";

        }
      }
    }

    console.log(table);

    return table;
  }

}
