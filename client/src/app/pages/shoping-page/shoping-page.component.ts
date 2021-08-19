import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-shoping-page',
  templateUrl: './shoping-page.component.html',
  styleUrls: ['./shoping-page.component.scss']
})
export class ShopingPageComponent implements OnInit {

  constructor(public settingsService: SettingsService) { }

  @Input() student: string = "";

  ngOnInit(): void {
    this.settingsService.currentPage = 3;
  }

}
