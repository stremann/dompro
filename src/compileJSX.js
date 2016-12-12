/** @jsx compileJSX */

export function compileJSX(type, props, ...children) {
    return { type, props, children };
}