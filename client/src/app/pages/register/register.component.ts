import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api';
import { SettingsService } from 'src/app/services/settings.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public userService: UsersService,
    public settingsService: SettingsService,
    public settingsApi: ApiService) {
  }

  ngOnInit(): void {
    this.userService.first_step_register = "display-block";
    this.userService.second_step_register = "display-none";
    this.userService._user = new User();
    this.userService._confirmPass = "";
  }

}
