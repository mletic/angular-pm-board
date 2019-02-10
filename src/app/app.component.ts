import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular-pm-board';
    toDoList = [];
    inProgressList = [];
    doneList = [];

    ngOnInit () {
        this.toDoList = this.getToDoList();
        this.inProgressList = this.getInProgressList();
        this.doneList = this.getDoneList();
    }

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

        this.toDoList.push(newItem);
    }

    getToDoList () {

        const toDoList = [
            {
                name: 'Task 1',
                labels: ['#f2d600', '#0079bf', '#eb5a46'],
                dueDate: '2019-02-10T17:24:17.393Z',
                asignee: 'marko'
            }, {
                name: 'Task 2',
                labels: ['#f2d600', '#61bd4f'],
                dueDate: '2019-02-19T17:24:17.393Z',
                asignee: 'marko'
            }, {
                name: 'Task 3',
                labels: ['#f2d600'],
                dueDate: '2019-02-20T17:24:17.393Z',
                asignee: 'mata'
            }
        ];

        return toDoList;
    }

    getInProgressList () {

        const inProgressList = [
            {
                name: 'Task 4',
                labels: ['#0079bf', '#eb5a46'],
                dueDate: '2019-02-17T17:24:17.393Z',
                asignee: 'marko'
            }, {
                name: 'Task 5',
                labels: ['#f2d600', '#61bd4f'],
                dueDate: '2019-02-10T19:24:17.393Z',
                asignee: 'boki'
            }, {
                name: 'Task 6',
                labels: ['#f2d600'],
                dueDate: '2019-02-18T11:24:17.393Z',
                asignee: 'marko'
            }
        ];

        return inProgressList;
    }

    getDoneList () {

        const doneList = [
            {
                name: 'Task 7',
                labels: ['#eb5a46'],
                dueDate: '2019-02-13T12:24:17.393Z',
                asignee: 'boki'
            }
        ];

        return doneList;
    }
}
