import { CClosure } from '../composer/c-framework.closure.js';

const C = CClosure;

const app = C();
document.body.appendChild(app.elem);

app.append(
    C('div')
        .styler({ width: '90vw', height: '80vh', 'background-color': 'aqua' })
        .append(C('div').styler({ backgroundColor: 'green' }))
);
