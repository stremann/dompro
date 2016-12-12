/** @jsx Dompro.compileJSX */

const a = (
    <ul>
        <li>item 1</li>
        <li>item 2</li>
    </ul>
);

const b = (
    <ul>
        <li>item 1</li>
        <li>hello!</li>
    </ul>
);

const $root = document.getElementById('root');
const $reload = document.getElementById('reload');

Dompro.updateDOM($root, a);
$reload.addEventListener('click', () => {
    Dompro.updateDOM($root, b, a);
});