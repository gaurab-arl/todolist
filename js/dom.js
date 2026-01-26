// dom.js
import { tasks, saveTasks } from "./data.js";

const place = document.querySelector('#place');

export function render() {
    place.innerHTML = '';

    tasks.forEach((item, index) => {
        const holder = document.createElement('div');
        holder.className = 'holder';

        holder.innerHTML = `
            <div class="card">
                <span>${item.work}</span>
                <span>${item.priority}</span>
                <input type="checkbox" ${item.completed ? 'checked' : ''}>
                <button>delete</button>
            </div>
        `;

        holder.querySelector('input').onclick = () => toggle(index);
        holder.querySelector('button').onclick = () => deleteTask(index);

        place.appendChild(holder);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    render();
}

function toggle(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    render();
}
