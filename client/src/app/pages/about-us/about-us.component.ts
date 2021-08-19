import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(public settingsService: SettingsService) { }

  @Input() student: string = "";

  ngOnInit(): void {
    this.settingsService.currentPage = 1;
  }
}
