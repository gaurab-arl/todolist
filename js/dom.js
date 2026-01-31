// dom.js
import { tasks, time_tasks, saveTasks } from "./data.js";

const place = document.querySelector('#place');
const timeTasksContainer = document.querySelector('.time-tasks');

export function render() {
    place.innerHTML = '';

    tasks.forEach((item, index) => {
        const holder = document.createElement('div');
        holder.className = 'holder';

        holder.innerHTML = `
            <div class="card">
                <span>${item.work}</span>
                <span>${item.priority}</span>
                <span class="time">${formatTime(item.createdAt)}</span>

                <input type="checkbox" ${item.completed ? 'checked' : ''}>
                <button>delete</button>
            </div>
        `;

        holder.querySelector('input').onclick = () => toggle(index);
        holder.querySelector('button').onclick = () => deleteTask(index);

        place.appendChild(holder);
    });

    timeTasksContainer.innerHTML = '';
    time_tasks.forEach((item, index) => {
        const time_holder = document.createElement('div');
        time_holder.className = 'holder time_holder';

        time_holder.innerHTML = `
         <div class ="card">
            <span> ${item.shedule} </span>
            <span> ${item.label} </span>
            <span class="time"> ${formatTime(item.created)} </span>
            <button id='shedule-delete'> Delete </button>
        </div>
         `;
        time_holder.querySelector('#shedule-delete').onclick = () => deleteTimeTask(index);
        timeTasksContainer.append(time_holder);
    });
}


function formatTime(timestamp) {
    const date = new Date(timestamp);

    return date.toLocaleString('en-US', {
        
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: 'short'
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    render();
}

function deleteTimeTask(index) {
    time_tasks.splice(index, 1);
    saveTasks();
    render();
}

function toggle(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    render();
}

