import { CClosure } from '../composer/c-framework.closure.js';

const C = CClosure;

const app = C();
document.body.appendChild(app.elem);

app.append(
    C(`<h1>App</h1>`)
        .styler({ width: '100vw', height: '100vh', 'background-color': 'aqua' })
        .append(C(`<li> This is a js vanilla app</li>`)),
    C(`<li> This is a js vanilla app</li>`),
    C(`<li> This is a js vanilla app 1 </li>`),
    C(`<li> This is a js vanilla app 2</li>`)
);
