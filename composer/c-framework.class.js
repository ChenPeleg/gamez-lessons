export class CClass {
    constructor(html = '', tag = 'div') {
        this.elem = document.createElement(tag);
        this.elem.innerHTML = html;
    }
    append(...CFuncChild) {
        CFuncChild.forEach((c) => this.elem.appendChild(c.elem));
    }
    styler(styleObj) {
        Object.keys(styleObj).forEach((prop) => this.elem.style.setProperty(prop, styleObj[prop]));
        return this;
    }
}
