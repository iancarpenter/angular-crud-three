import { Component, OnInit } from '@angular/core';
import { HttpClientVillainService } from 'src/app/services/http-client-villain.service';
import { Villain } from 'src/app/classes/villain';


@Component({
  selector: 'app-list-villains',
  templateUrl: './list-villains.component.html',
  styleUrls: ['./list-villains.component.css']
})
export class ListVillainsComponent implements OnInit {

  villains: Villain[] = [];

  constructor(private villainService: HttpClientVillainService) { }

  ngOnInit() {
    this.getVillains();
  }

  getVillains() {
    this.villainService.getVillains().subscribe(data => { 
      this.villains = data;
    });    
  }


}
