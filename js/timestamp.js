import { addTimeTasks, loadTasks } from "./data.js";
import { render } from "./dom.js";
import { setupEvents } from "./events.js";

const time = document.querySelector('#timeInput');
const timesecond = document.querySelector('#timeInputsecond');
const purposeInput = document.querySelector('#purposeInput');
const timebutton = document.querySelector('#addTimeBtn');
const time_wrapper = document.querySelector('.wrapper');

export function setup_time_events() {

    timebutton.addEventListener('click', () => {
        const timetask = time.value;
        const timetasksecond = timesecond.value;
        const purpose = purposeInput.value.trim();

        if (!timetask || !purpose || !timetasksecond) {
            // Add visual feedback
            if (!timetask) time.style.borderColor = 'red';
            if (!purpose) purposeInput.style.borderColor = 'red';
            if (!timetasksecond) timesecond.style.borderColor = 'red';
            setTimeout(() => {
                time.style.borderColor = '';
                purposeInput.style.borderColor = '';
                timesecond.style.borderColor = '';
            }, 2000);
            return;
        }

        addTimeTasks(timetask, timetasksecond, purpose);

        // Clear inputs
        time.value = '';
        purposeInput.value = '';
        timesecond.value = '';
        render();
    });
}

time_wrapper.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        timebutton.click();
    }

});

console.log('time');

