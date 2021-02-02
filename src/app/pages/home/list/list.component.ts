import { Component, OnInit } from '@angular/core';
import { FoodItem, FoodParam, Status } from '../../../@theme/components/models/list-item.models';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  foods: FoodItem[] = [];
  foodParam: FoodParam = {
    skip: 0,
    limit: 5,
    latitude: 0,
    longitude: 0
  };
  info: Status = {
    isLoading: false,
    isEnd: false,
  }
  constructor(private foodService: FoodService) {

  }

  ngOnInit(): void {
  }

  getFoods() {
    this.foodParam.skip++;
    this.foodService.getFood(this.foodParam).subscribe(response => {
      this.info.isLoading = false;
      if (response.length <= 0) {
        this.info.isEnd = true;
        return;
      }
      this.foods = [...this.foods, ...response];
    });
  }

  loadNext() {
    if (!this.info.isLoading && !this.info.isEnd) {
      this.info.isLoading = true;
      this.getFoods();
    }
  }
}
