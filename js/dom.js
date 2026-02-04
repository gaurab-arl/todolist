// dom.js
import { tasks, time_tasks, saveTasks } from "./data.js";

console.log('dom');

const tasklist = document.querySelector('#taskList');
const timelist = document.querySelector('#timeList');

export function render(tasksArray = tasks) {
    tasklist.innerHTML = '';

    tasksArray.forEach((item, index) => {
        const holder = document.createElement('div');
        holder.className = 'holder';

        holder.innerHTML = `
            <div class="card task">
                <div class='card-info'>
                <span>${item.work}</span>
                <span>${item.priority}</span>
               </div> 
               <div class='card-time'>
                <span class="time">${formatTime(item.createdAt)}</span>
                
                <input type="checkbox" ${item.completed ? 'checked' : ''}>
                </div>
                <button>delete</button>
            </div>
        `;

        // In dom.js, update the condition:
        if (item.priority.toLowerCase() === 'high') {
            holder.classList.add('high');
        }

        if (item.priority.toLowerCase() === 'medium') {
            holder.classList.add('medium');
        }
        if (item.priority.toLowerCase() === 'low') {
            holder.classList.add('low');
        }

        holder.querySelector('input').onclick = () => toggle(index);
        holder.querySelector('button').onclick = () => deleteTask(index);

        tasklist.appendChild(holder);
    });


    timelist.innerHTML = '';
    time_tasks.forEach((item, index) => {
        const time_holder = document.createElement('div');
        time_holder.className = 'holder time_holder';

        time_holder.innerHTML = `
         <div class ="card">
            <div class="time-info">
            <span> ${item.shedule} - ${item.shedulesecond} </span>
            <span> ${item.label} </span>
            </div>
            <span class="time"> ${formatTime(item.created)} </span>
            
            <button class='shedule-delete'> Delete </button>
        </div>
         `;
        time_holder.querySelector('.shedule-delete').onclick = () => deleteTimeTask(index);
        timelist.append(time_holder);
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

