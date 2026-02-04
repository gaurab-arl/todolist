// events.js
import { addTask, tasks } from "./data.js";
import { render } from "./dom.js";

console.log('event');
const wrapper = document.querySelector('#input-field');

const taskInput = document.querySelector('#taskInput');
const labelInput = document.querySelector('#priorityInput');

const button = document.querySelector('#addTaskBtn');



const categorybutton = document.querySelector('.filter-buttons');

export function setupEvents() {
    button.addEventListener('click', () => {
        const task = taskInput.value.trim();
        
        const label = labelInput.value;


        if (!task || !label) {
            // Add visual feedback
            if (!task) taskInput.style.borderColor = 'red';
            if (!label) labelInput.style.borderColor = 'red';
           
            setTimeout(() => {
                taskInput.style.borderColor = '';
                labelInput.style.borderColor = '';
            }, 2000);
            return;
        }
        

        addTask(task, label);
        taskInput.value = '';
        labelInput.value = '';
        render(tasks);
    });

    wrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            button.click();
        }
    });
}

export function category() {
    categorybutton.addEventListener('click' , (e) => {
        const filter = e.target.dataset.filter;
        if(filter === 'all')
        {
            render(tasks);
        }
        if(filter === 'high')
        {
            const temp = tasks.filter( t => t.priority == 'high');
           
            render(temp);
        }
        if(filter === 'medium')
        {
            const temp = tasks.filter( t => t.priority == 'medium');
            render(temp);
        }
        if(filter === 'low')
        {
            const temp = tasks.filter( t => t.priority == 'low');
            render(temp);
        }
    });

};
