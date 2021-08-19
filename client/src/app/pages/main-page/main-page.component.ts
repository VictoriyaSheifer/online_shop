import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api';
import { SettingsService } from 'src/app/services/settings.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    public userService: UsersService,
    public settingsService: SettingsService,
    public settingsApi: ApiService
  ) { }

  ngOnInit(): void {
  }

}
