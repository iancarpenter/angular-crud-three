import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientVillainService } from 'src/app/services/http-client-villain.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-villain',
  templateUrl: './create-villain.component.html',
  styleUrls: ['./create-villain.component.css']
})
export class CreateVillainComponent {

  createVillainForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    episode: new FormControl('')
  });

  constructor(private villainService: HttpClientVillainService,
              private router: Router) { }

  createVillain() {

    if (this.createVillainForm.valid) {
      
      const id = this.createVillainForm.get('id').value;
      const name = this.createVillainForm.get('name').value;
      const episode = this.createVillainForm.get('episode').value;

      this.villainService.addVillain(id, name, episode).subscribe();

      this.router.navigateByUrl("/");
    }
  }
}
