/** @jsx Dompro.compileJSX */

function log(e) {
    console.log(e.target.value);
}

const f = (
    <ul style="list-style: none;">
        <li className="item" onClick={() => alert('hi!')}>item 1</li>
        <li className="item">
            <input type="checkbox" checked={true} />
            <input type="text" onInput={log} />
        </li>
        {/* this node will always be updated */}
        <li forceUpdate={true}>text</li>
    </ul>
);

const g = (
    <ul style="list-style: none;">
        <li className="item item2" onClick={() => alert('hi!')}>item 1</li>
        <li style="background: red;">
            <input type="checkbox" checked={false} />
            <input type="text" onInput={log} />
        </li>
        {/* this node will always be updated */}
        <li forceUpdate={true}>text</li>
    </ul>
);

const $root = document.getElementById('root');
const $reload = document.getElementById('reload');

Dompro.updateDOM($root, f);
$reload.addEventListener('click', () => {
    Dompro.updateDOM($root, g, f);
});