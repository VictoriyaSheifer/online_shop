import { Component,Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  constructor(public settingsService: SettingsService) { }

  @Input() student: string = "";

  ngOnInit(): void {
    this.settingsService.currentPage = 4;
  }

}
