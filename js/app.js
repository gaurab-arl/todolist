// app.js
import { loadTasks } from "./data.js";
import { render } from "./dom.js";
import { setupEvents } from "./events.js";
import { motivation } from "./motivation.js";

console.log('loaded');

loadTasks();
render();
setupEvents();
motivation();
