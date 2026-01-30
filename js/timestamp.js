import { addTimeTasks} from "./data";

const taskInput = document.querySelector('#time');
const purposeInput = document.querySelector('#purpose');
const timebutton = document.querySelector('.time-button');
const wrapper = document.querySelector('#wrapper');

export function setup_time_events() {

    timebutton.addEventListener('click', () => {
        const timetask = taskInput.value.trim();
        const purpose = purposeInput.value.trim();

        if (!timetask || !purpose) {
            // Add visual feedback
            if (!task) taskInput.style.borderColor = 'red';
            if (!purpose) purposeInput.style.borderColor = 'red';
            setTimeout(() => {
                taskInput.style.borderColor = '';
                purposeInput.style.borderColor = '';
            }, 2000);
            return;
        }

        addTimeTasks(timetask , purpose);
       
        // Clear inputs
        taskInput.value = '';
        purposeInput.value = '';
    });
}

wrapper.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        timebutton.click();
    }
});

console.log('time');

