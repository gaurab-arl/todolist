// events.js
import { addTask } from "./data.js";
import { render } from "./dom.js";

const wrapper = document.querySelector('#wrapper');
const taskInput = document.querySelector('#task');
const labelInput = document.querySelector('#label');
const button = document.querySelector('#button');

export function setupEvents() {
    button.addEventListener('click', () => {
        const task = taskInput.value.trim();
        const label = labelInput.value.trim();

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
         if (task != 'high' || task != 'medium' || task != 'low') {
                labelInput.style.borderColor = "red";
                setTimeout(() => {
                    labelInput.style.borderColor = '';

                }, 2000);
                labelInput.value = '';
               
            }

        addTask(task, label);
        taskInput.value = '';
        labelInput.value = '';
        render();
    });

    wrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            button.click();
        }
    });
}
