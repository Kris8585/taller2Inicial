import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  isElementRoute: boolean;
  shapeName:string;
  shapeData$:Observable<Elemento[]>;
  colSize:string;
  flagFormula:boolean;
  flagImg:boolean;
  

  constructor(private router: Router, private _dataService:DataService, private _route:ActivatedRoute) {
    this.shapeName = this._route.snapshot.params['elementName'];
    this.shapeData$ = this._dataService.getElementosByName(this.shapeName);
    this.colSize ="col-md-12";
    this.flagFormula = false;
    this.flagImg = false;

  } 
  ngOnInit() {
    this._route.params.subscribe(routeParams => {
      this.shapeData$ = this._dataService.getElementosByName(routeParams.elementName);
    }); 
      
  }
  
  goTo(route:string){
    this.router.navigateByUrl(route);
  }

  changePage(change:number){
    if(change == 1){
      this.colSize ="col-md-6";
      this.flagFormula = true;
      this.flagImg = false;
    }
    else if(change == 2){
      this.colSize ="col-md-6"
      this.flagImg = true;
      this.flagFormula = false;
    }else if(change == 3)
    {
      this.colSize ="col-md-12"
      this.flagImg = false;
      this.flagFormula = false;
    }
    
  }
  
  
}
