import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.scss']
})
export class TaskListComponent implements OnInit {
    @Input() itemList = [];
    @Input() name;

    ngOnInit () {}

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
        }
    }

    addNewItem () {

        const newItem = {
            name: 'Task ' + Math.floor(Math.random() * 1001),
            labels: ['#61bd4f'],
            dueDate: new Date().toISOString(),
            asignee: 'marko'
        };

        this.itemList.push(newItem);
    }

}
