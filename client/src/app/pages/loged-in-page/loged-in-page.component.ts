import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api';
import { SettingsService } from 'src/app/services/settings.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-loged-in-page',
  templateUrl: './loged-in-page.component.html',
  styleUrls: ['./loged-in-page.component.scss']
})
export class LogedInPageComponent implements OnInit {

  constructor(
    public userService: UsersService,
    public settingsService: SettingsService,
    public settingsApi: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("this._loged_in_user = new User();", this.userService._loged_in_user)
    if (this.userService._loged_in_user.id === 0) {
      this.router.navigate(['/']);
    }
  }

}
