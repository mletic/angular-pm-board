import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TaskListComponent } from '../app/taskList/taskList.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskComponent } from '../app/task/task.component';

storiesOf('Task list component', module)
    .addDecorator(
        moduleMetadata({
            imports: [DragDropModule],
            declarations: [TaskComponent],
        })
    )
    .add('without tasks', () => ({
        component: TaskListComponent,
        props: {
            itemList: [],
            name: 'To do'
        },
    }))
    .add('with added tasks', () => ({
        component: TaskListComponent,
        props: {
            itemList: [
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
            ],
            name: 'To do'
        },
    }));
