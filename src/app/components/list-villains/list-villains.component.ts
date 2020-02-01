import { Component, OnInit } from '@angular/core';
import { HttpClientVillainService } from 'src/app/services/http-client-villain.service';
import { Villain } from 'src/app/classes/villain';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-villains',
  templateUrl: './list-villains.component.html',
  styleUrls: ['./list-villains.component.css']
})
export class ListVillainsComponent implements OnInit {

  villains: Villain[] = [];

  constructor(private villainService: HttpClientVillainService,
              private router: Router) { }

  ngOnInit() {
    this.getVillains();
  }

  getVillains() {
    this.villainService.getVillains().subscribe(data => { 
      this.villains = data;
    });    
  }

  toCreateVillain() {
    this.router.navigateByUrl("/createvillain");
  }

}
