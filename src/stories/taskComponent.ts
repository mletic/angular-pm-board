import { storiesOf } from '@storybook/angular';
import { TaskComponent } from '../app/task/task.component';

storiesOf('Task component', module)
    .add('with name', () => ({
        component: TaskComponent,
        props: {
            taskItem: {
                name: 'Task 1'
            }
        },
    }))
    .add('with labels', () => ({
        component: TaskComponent,
        props: {
            taskItem: {
                name: 'Task 1',
                labels: ['#f2d600', '#0079bf', '#eb5a46'],
            }
        },
    }))
    .add('with date', () => ({
        component: TaskComponent,
        props: {
            taskItem: {
                name: 'Task 1',
                dueDate: '2019-02-10T17:24:17.393Z',
            }
        },
    }))
    .add('full data', () => ({
        component: TaskComponent,
        props: {
            taskItem: {
                name: 'Task 1',
                labels: ['#f2d600', '#0079bf', '#eb5a46'],
                dueDate: '2019-02-10T17:24:17.393Z',
                asignee: 'marko'
            }
        },
    }));
