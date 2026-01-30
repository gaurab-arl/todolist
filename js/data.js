// data.js
export let tasks = [];
export let time_tasks = [];

export function loadTasks() {
    const data = localStorage.getItem("tasks");
    tasks = data ? JSON.parse(data) : [];

    const temp_data = localStorage.getItem("timeTasks");
    time_tasks = temp_data ? JSON.parse(temp_data) : [];
}


export function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));

    localStorage.setItem("timeTasks", JSON.stringify(time_tasks));
}

export function addTask(task, label) {
    tasks.push({
        work: task,
        priority: label,
        completed: false,
        createdAt: Date.now()
    });
    saveTasks();
  
}

export function addTimeTasks(task , purpose) {
      time_tasks.push({
        shedule: task,
        label: purpose,
        created : Date.now()
    });
    saveTasks();
}

console.log(time_tasks);