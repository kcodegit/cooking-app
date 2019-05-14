import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    console.log('name:', this.name);
    console.log('amount:', this.amount);
    this.shoppingListService.addIngredient(
      new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value),
    );
  }
}
