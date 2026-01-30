// app.js
import { loadTasks } from "./data.js";
import { render } from "./dom.js";
import { setupEvents } from "./events.js";
import { motivation } from "./motivation.js";
import { setup_time_events } from "./timestamp.js";

console.log('loaded');

loadTasks();
render();
setupEvents();
setup_time_events();
motivation();
