import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FoodItem } from '../models/list-item.models';

@Component({
  selector: 'ngx-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListItemComponent implements OnInit {
  @Input() food: FoodItem;
  constructor() { }

  ngOnInit(): void {
  }

  getImage(): string {
    let image: string = "https://via.placeholder.com/400";
    if (this.food.images.length > 0) {
      image = this.food.images[0].base64;
    }
    return image;
  }

}
