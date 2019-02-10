import { Component, OnInit, Input } from '@angular/core';
import { DragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    @Input() taskItem;
    @Input() dropListRef;

    constructor(private dragService: DragDrop) {}

    ngOnInit () {
        this.dragService.createDropList(this.dropListRef);
    }

}
