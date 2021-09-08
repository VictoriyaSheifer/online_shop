import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api';
import { SettingsService } from 'src/app/services/settings.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-regular-page',
  templateUrl: './regular-page.component.html',
  styleUrls: ['./regular-page.component.scss']
})
export class RegularPageComponent implements OnInit {

  constructor(
    public userService: UsersService,
    public settingsService: SettingsService,
    public settingsApi: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //console.log("loged_in_user", this.userService._loged_in_user)
    if (this.userService._loged_in_user.id === 0) {
      this.router.navigate(['/']);
    }
    else {
      this.router.navigate(['/loged-in']);
    }
  }

}
