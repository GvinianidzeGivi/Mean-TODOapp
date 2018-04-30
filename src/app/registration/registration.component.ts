import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 
  form = new FormGroup({

    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl('', Validators.email)
  
  });

  constructor() { }

  ngOnInit() { }

}
