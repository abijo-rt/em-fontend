import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  list1Items = ['Item 1', 'Item 2', 'Item 3','Item 1', 'Item 2', 'Item 3','Item 1', 'Item 2', 'Item 3'];
  list2Items: string[] = [];

  moveItem(item: string, targetList: string[]) {
    const index = this.list1Items.indexOf(item);
    if (index !== -1) {
      this.list1Items.splice(index, 1);
      targetList.push(item);
    }
  }

  removeItem(item: string, list: string[]) {
    const index = list.indexOf(item);
    if (index !== -1) {
      list.splice(index, 1);
      this.list1Items.push(item);
    }
  }

}
