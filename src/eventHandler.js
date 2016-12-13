import { isEventProp } from './propHandler.js';

export function extractEventName(name) {
    return name.slice(2).toLowerCase();
}

export function addEventListeners($target, props) {
    Object.keys(props).forEach(name => {
        if (isEventProp(name)) {
            $target.addEventListener(
                extractEventName(name),
                props[name]
            );
        }
    });
}