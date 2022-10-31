export function CClosure(tag = 'div') {
    const elem = document.createElement(tag);
    return {
        elem: elem,
        append(...CFuncChild) {
            CFuncChild.forEach((c) => this.elem.appendChild(c.elem));
        },
        styler(styleObj) {
            Object.keys(styleObj).forEach((prop) => this.elem.style.setProperty(prop, styleObj[prop]));
            return this;
        },
    };
}
