import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-loged-in-nav',
  templateUrl: './loged-in-nav.component.html',
  styleUrls: ['./loged-in-nav.component.scss']
})
export class LogedInNavComponent implements OnInit {

  constructor(
    public userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
