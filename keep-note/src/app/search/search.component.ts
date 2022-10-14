import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText =""

   @Output()
   ser:EventEmitter<string> = new EventEmitter<string>


   search(){
    this.ser.emit()
   }
  constructor() { }

  ngOnInit(): void {
  }

}
