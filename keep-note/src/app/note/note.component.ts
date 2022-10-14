import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {


  notes = NOTES;
  constructor() { }

  ngOnInit(): void {
  }

}
