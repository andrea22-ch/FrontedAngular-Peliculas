import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  contenidoMarkDown="";
  constructor() { }

  ngOnInit(): void {
  }
  InputTextArea(texto:any){
    this.contenidoMarkDown=texto;
  }
}
