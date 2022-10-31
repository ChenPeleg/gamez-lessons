export function CFn(html = '', tag = 'div') {
    this.elem = document.createElement(tag);
    this.elem.innerHTML = html;
    this.append = function (...CFuncChild) {
        CFuncChild.forEach((c) => this.elem.appendChild(c.elem));
    };
    this.styler = function (styleObj) {
        Object.keys(styleObj).forEach((prop) => this.elem.style.setProperty(prop, styleObj[prop]));
        return this;
    };
    return this;
}
