import { Component } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  items: Item[] = [];
  newItemName: string = '';
  newItemQuantity: number = 1;

  addItem() {
    if (this.newItemName.trim()) {
      this.items.push({
        name: this.newItemName,
        quantity: this.newItemQuantity,
        purchased: false
      });
      this.newItemName = '';
      this.newItemQuantity = 1;
    }
  }

  togglePurchased(item: Item) {
    item.purchased = !item.purchased;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
