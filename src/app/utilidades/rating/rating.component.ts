import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() maximoRating=5;
  @Input()  ratingSeleccionado=0;
  @Output() rated = new EventEmitter<number>();

  maximoRatingArr:number[]=[];
  votado=false;
  ratingAnterior:number;

  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr=Array(this.maximoRating).fill(0);
  }
  manejarMouseEnter(index:number):void{
  this.ratingSeleccionado=index+1;
  }
  manejarMouseleave(){
    this.ratingSeleccionado=0;
  }
  rate(index:number):void{
      this.ratingSeleccionado=index+1;
      this.votado=true;
      this.ratingAnterior=this.ratingSeleccionado;
      this.rated.emit(this.ratingSeleccionado);
  }

}
