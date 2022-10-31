export function CClosure(html = '', tag = 'div') {
    const elem = document.createElement(tag);
    elem.innerHTML = html;
    return {
        elem: elem,
        append(...CFuncChild) {
            CFuncChild.forEach((c) => this.elem.appendChild(c.elem));
            return this;
        },
        styler(styleObj) {
            Object.keys(styleObj).forEach((prop) =>
                this.elem.style.setProperty(prop, styleObj[prop])
            );
            return this;
        },
    };
}
