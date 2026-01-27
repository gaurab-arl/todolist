// data.js
export let tasks = [];

export function loadTasks() {
    const data = localStorage.getItem("tasks");
    tasks = data ? JSON.parse(data) : [];
}

export function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
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
