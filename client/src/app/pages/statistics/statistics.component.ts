import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(public settingsService: SettingsService) { }

  @Input() student: string = "";

  ngOnInit(): void {
    this.settingsService.currentPage = 2;
  }

}
