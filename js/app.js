// app.js
import { motivation } from "./motivation.js";
import { loadTasks, tasks } from "./data.js";
import { render } from "./dom.js";
import { setupEvents } from "./events.js";

import { setup_time_events } from "./timestamp.js";
import { category } from "./events.js";
import { setupTheme } from "./theme.js";

console.log('loaded');

motivation();
loadTasks();
render(tasks);
setupEvents();
setup_time_events();
category();
setupTheme();

