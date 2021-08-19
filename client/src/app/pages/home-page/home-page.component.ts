import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public settingsService: SettingsService) { }

  @Input() student: string = "";

  ngOnInit(): void {
    this.settingsService.currentPage = 0;
  }

}
