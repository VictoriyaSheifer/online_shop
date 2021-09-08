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
    //console.log("loged_in_user", this.userService._loged_in_user)
    if (this.userService._loged_in_user.id == 0) {
      this.router.navigate(['/']);
      //console.log("_user_loged_in_page_number ::", this.userService._user_loged_in_page_number)
    }


  }

}
